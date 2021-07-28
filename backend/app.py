from flask import Flask, jsonify
from flask_cors import CORS
from flask_pymongo import PyMongo

from build_samples import build_samples

app = Flask(__name__)
app.config[
    "MONGO_URI"
] = "mongodb+srv://tianen:MONGO.micromata1907@cluster0.uqstl.mongodb.net/" \
    "waterBase?retryWrites=true&w=majority "
mongo = PyMongo(app)
db = mongo.db
CORS(app)
sample_categories = ['ph', 'Hardness', 'Solids', 'Chloramines', 'Sulfate', 'Conductivity', 'Organic_carbon',
                     'Trihalomethanes', 'Turbidity', 'Potability']
isImporting = False


@app.route("/")
def index():
    # return jsonify({"apis": ["/", "/potability", "/avgs", "/minmax/<string:category>", "/avg-array"]})
    return jsonify({
        "baseURL": "https://water-potability-api.herokuapp.com/",
        "apis": {
            "averageOfCategory": "avg/<string:category>",
            "allAverages": "avgs",
            "allAveragesAsArray": "avg-array",
            "minmaxOfCategory": "minmax/<string:category>",
            "generalDataAboutPotability": "potability"
        }
    })


@app.route("/avg/<string:category>")
def avg(category):
    try:
        data = [instance[category] for instance in db.samples.find() if instance[category] is not None]
    except KeyError:
        data = {'msg': 'Wrong key'}
    average = sum(data) / len(data)
    return jsonify({'avg': average})


@app.route("/potability")
def potability():
    data = [instance['Potability'] for instance in db.samples.find() if instance['Potability'] is not None]
    potable_data = {
        'amount': len(data),
        'potable': len([x for x in data if x == 1]),
        'notPotable': len([x for x in data if x == 0]),
        'avg': sum(data) / len(data)
    }
    return jsonify(potable_data)





@app.route("/overview")
def overview():
    data = [instance['Potability'] for instance in db.samples.find() if instance['Potability'] is not None]
    table_values = []
    for category in sample_categories:
        table_values.append([
            category,
            list(db.samples.aggregate([
                {
                    '$match': {
                        category: {
                            '$ne': None
                        }
                    }
                }, {
                    '$sort': {
                        category: 1
                    }
                }, {
                    '$limit': 1
                }, {
                    '$project': {
                        category: 1
                    }
                }
            ]))[0][category],
            list(db.samples.aggregate([
                {
                    '$match': {
                        category: {
                            '$ne': None
                        }
                    }
                }, {
                    '$sort': {
                        category: -1
                    }
                }, {
                    '$limit': 1
                }, {
                    '$project': {
                        category: 1
                    }
                }
            ]))[0][category]
        ])
    return jsonify({
        "avg": sum(data) / len(data),
        "count": db.samples.count(),
        "minmax": table_values
    })


@app.route("/avgs")
def avgs():
    averages = {}
    for category in sample_categories:
        data = [instance[category] for instance in db.samples.find() if instance[category] is not None]
        average = sum(data) / len(data)
        averages[category] = average
    return averages


@app.route("/avg-array")
def avg_array():
    averages = []
    for category in sample_categories:
        data = [instance[category] for instance in db.samples.find() if instance[category] is not None]
        average = sum(data) / len(data)
        averages.append(average)

    return {
        "categories": sample_categories,
        "averages": averages
    }


@app.route("/minmax/<string:category>")
def minmax(category):
    return {
        'min': list(db.samples.aggregate([
            {
                '$match': {
                    category: {
                        '$ne': None
                    }
                }
            }, {
                '$sort': {
                    category: 1
                }
            }, {
                '$limit': 1
            }
        ]))[0],
        'max': list(db.samples.aggregate([
            {
                '$match': {
                    category: {
                        '$ne': None
                    }
                }
            }, {
                '$sort': {
                    category: -1
                }
            }, {
                '$limit': 1
            }
        ]))[0]
    }


@app.route("/sample-count")
def sample_count():
    return jsonify({"count": db.samples.count()})


@app.route("/insert-samples")
def insert_samples():
    if not db.samples.find_one():
        samples = build_samples()
        db.samples.insert_many(samples)
    return "Success...? I hope"


@app.route("/empty-db")
def empty_db():
    db.samples.drop()
    return 'dropped'


@app.route("/analysis")
def analysis():
    analysis_data = list(db.samples.find())
    data = []
    for dataset in analysis_data:
        row = []
        for key in sample_categories:
            row.append(dataset[key])
        data.append(row)

    return jsonify({
        "colNames": sample_categories,
        "data": data
    })


if __name__ == '__main__':
    app.run()
