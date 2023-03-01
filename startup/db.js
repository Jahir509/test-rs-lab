const mongoose = require("mongoose");

module.exports = ()=>{

    mongoose.connect(process.env.DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        dbName: 'eshop-database'
    })
        .then(() => {
            console.log('Database connected')

        })
        .catch(err => console.log('Error connecting to database', err));
}
