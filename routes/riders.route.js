const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const {calculatedTotalCollectionOfRider,
        calculateWeightOfRiderCarry,
        getDocumentCountBasedOnRiderProperty
      } = require('../query/queryfunction.file')


router.get("/count/",async(req,res)=>{
    try {
        const users = await getDocumentCountBasedOnRiderProperty(false)

        res.status(200)
            .send({
                task:"1. Count how many documents don't have the 'rider' property",
                data: users[0].count
            });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
})


router.get("/weight",async(req,res)=>{
    try {
        const riders = await calculateWeightOfRiderCarry(10)

        res.status(200)
            .send({
                task:`2. Given that a rider can only take a maximum of 10 parcels in a bag, which riders are ready to deliver. in simpler terms, give the list of riders along with the parcel id who don't have more than 10 parcels in their bag.`,
                data: riders
            });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
})


router.get("/collection",async(req,res)=>{
    try {
        const riders = await calculatedTotalCollectionOfRider();

        res.status(200)
            .send({
                task:"3. Provide info for all the riders id along with their total collected amount",
                data: riders
            });
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
})

module.exports=router;
