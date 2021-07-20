from flask import Flask, jsonify, render_template
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/mongo"
mongo = PyMongo(app)


@app.route('/')
def index():
    online_users = mongo.db.users.find({"online": True})
    return render_template(
        "index.html",
        online_users=online_users
    )


@app.route('/api')
def api():
    return jsonify({
        'hurz': 0
    })
