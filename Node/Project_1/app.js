const express = require('express'); /*importing express lib*/

const router = require('./routes/index');/*importing routes*/

//Config
const app = express(); /*lib for server*/
app.use('/', router);

app.use(express.json()); /*req POST = req GET*/

module.exports = app;