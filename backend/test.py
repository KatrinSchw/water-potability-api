import requests

import pymongo
from pymongo import MongoClient
client = MongoClient(
    "mongodb+srv://tianen:MONGO.micromata1907@cluster0.uqstl.mongodb.net/waterBase?retryWrites=true&w=majority"
)
db = client.waterBase


def main():
    analysis_data = list(db.samples.find())
    keys = ['ph', 'Hardness', 'Solids', 'Chloramines', 'Sulfate', 'Conductivity', 'Organic_carbon', 'Trihalomethanes', 'Turbidity', 'Potability']
    data = []
    for dataset in analysis_data:
        row = []
        for key in keys:
            row.append(dataset[key])
        data.append(row)


if __name__ == "__main__":
    main()
