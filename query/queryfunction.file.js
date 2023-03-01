const mongoose = require("mongoose");
const collection = mongoose.connection.collection('task');

async function getDocumentCountBasedOnRiderProperty(cond) {
    return await collection.aggregate([
        {
            "$match": {
                rider: {
                    "$exists": cond
                }
            },

        },
        {
            "$group": {
                "_id": null,
                "count": {
                    "$sum": 1
                }
            }
        },
    ]).toArray()
}

async function calculateWeightOfRiderCarry(limit){
    return await collection.aggregate([
        {
            "$match": {
                rider: {
                    "$exists": true
                }
            },

        },
        {
            "$group": {
                "_id": "$rider",
                "parcel_ids": {
                    "$push": "$_id"
                },
                "total": {"$sum": 1},
                "total_weight": {"$sum": "$weight"}
            }
        },
        {
            "$match": {
                "total_weight": {
                    "$lte": limit
                }
            }
        },
        {
            "$project": {
                "name": "$_id",
                "parcel_ids": "$parcel_ids",
                "total": "$total",
                "total_weight": "$total_weight",
                "_id": 0
            }
        }
    ]).toArray();
}

async function calculatedTotalCollectionOfRider(){
    return await collection.aggregate([
        {
            "$match": {
                rider: {
                    "$exists": true
                }
            },

        },
        {
            "$group": {
                "_id": "$rider",
                "total_collected": { "$sum": "$amount" },
                "collected_order_ids": {$push: "$_id"}
            }
        },
        {
            "$project":{
                "name":"$_id",
                "total_colleted":"$total_collected",
                "collected_order_ids": "$collected_order_ids",
                "_id":0
            }
        }
    ]).toArray();
}


module.exports = {
    getDocumentCountBasedOnRiderProperty,
    calculateWeightOfRiderCarry,
    calculatedTotalCollectionOfRider
}
