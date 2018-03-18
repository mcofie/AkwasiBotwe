const express = require('express');
const bodyParser = require('body-parser');
const app = express();

//require route file for well structured app route
// 1.app-> instance of express 2.db -> database
require('./app/route')(app, {});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); //URL encoded forms processor

let port = 8000;


app.listen(port,()=>{console.log('Webhook server is listening, port 3000')});
