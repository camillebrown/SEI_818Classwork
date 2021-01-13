const dbConfig = require('../config/db.config')

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

//Default set up of mongoose
//Create an empty object and passing values to be used for setup
const db = {}
//passing the entire mongoose middleware
db.mongoose = mongoose;
// setting a url and grabbing that url from dbConfig
db.url = dbConfig.url;
//requiring model and passing the mongoose middleware to use in the model
db.tutorials = require("./tutorial.model.js")(mongoose);

module.exports = db;

//Index brings together all of the models of your app