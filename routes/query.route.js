const express = require('express');
const router = express.Router();
const {calculatedTotalCollectionOfRider,
    calculateWeightOfRiderCarry,
    getDocumentCountBasedOnRiderProperty
} = require('../query/queryfunction.file')

router.get("/search",async(req,res)=>{
    if(req.query && req.query.riders){
        try {
            const users = await getDocumentCountBasedOnRiderProperty(req.query.riders.toLowerCase() === 'true')

            res.status(200)
                .send({
                    task:`1. Count how many documents don't have the 'rider' property. riders property in query now: ${req.query.riders}`,
                    data: users[0].count
                });
            return;
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server Error. Possible error: wrong query params given.');
            return;
        }
    }

    if(req.query && req.query.weight) {
        try {
            const riders = await calculateWeightOfRiderCarry(+req.query.weight)

            res.status(200)
                .send({
                    task:`2. Given that a rider can only take a maximum of ${req.query.weight} parcels in a bag, which riders are ready to deliver. in simpler terms, give the list of riders along with the parcel id who don't have more than 10 parcels in their bag.`,
                    data: riders
                });
            return
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
            return
        }
    }

    if(req.query && req.query.collection) {
        try {
            const riders = await calculatedTotalCollectionOfRider();

            res.status(200)
                .send({
                    task:"3. Provide info for all the riders id along with their total collected amount",
                    data: riders
                });
            return
        }
        catch (error) {
            console.error(error);
            res.status(500).send('Server Error');
            return
        }
    }

    res.status(404).send('Your requested api not found');

})

module.exports=router;
