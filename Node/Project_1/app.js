const express = require('express'); /*importing express lib*/
const mustache = require('mustache-express');/*importing mustache*/
const router = require('./routes/index');/*importing routes*/

//Config
const app = express(); /*lib for server*/
app.use('/', router);

app.use(express.json()); /*req POST = req GET*/

app.engine('mst', mustache() );/*motor*/
app.set('view engine', 'mst');
app.set('views', __dirname + '/views');

module.exports = app;