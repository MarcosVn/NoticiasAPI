const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require('mongoose');

const routes = require("./routes/Routes");
const db = require('./configurations/Database');
const app = express();

require('dotenv').config();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api', routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.DB_URL || db.URL, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database connection sucessfull');    
}).catch(err => {
  console.error('Database connection error', err);
  process.exit(1);
});

module.exports = app;
