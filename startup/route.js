require('dotenv/config');
const express = require('express');
const api = process.env.API_URL;

// Routers
const queryRouter = require('../routes/query.route');
const riderRouter = require('../routes/riders.route');


module.exports = function (app){
    app.use(`${api}/query`,queryRouter);
    app.use(`${api}/riders`,riderRouter);
}
