require('dotenv').config()
const express = require("express");
const app = express();
const env = process.env;


/*** Routes ***/
require('./startup/route')(app);

/*** DB Connection ***/
require('./startup/db')();

app.listen(process.env.PORT,()=>{
    console.log("Node Server Started at port: "+process.env.PORT)
})
