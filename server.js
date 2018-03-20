const express = require('express');
const bodyParser = require('body-parser');
// const MongoClient    = require('mongodb').MongoClient;
// const mongoose = require('mongoose');
// const db = require('./app/config/database');
const app = express();

//require route file for well structured app route
// 1.app-> instance of express 2.db -> database
require('./app/route')(app, {});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //URL encoded forms processor

//server port
let port = 8000;

// MongoClient.connect(db.url, (err, database) => {
//     if (err) return console.log(err);

    // Make sure you add the database name and not the collection name
    // myDatabase = database.db("bot-api");
    // require('./app/route')(app,myDatabase);
    app.listen(port, () => {console.log('We are live on ' + port);});
// })