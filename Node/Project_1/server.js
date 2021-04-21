const app = require('./app');
const mongoose = require ('mongoose');

require('dotenv').config({path:'variables.env'});/*global settings*/


/*mongodb://127.0.0.1:27017/?compressors=disabled&gssapiServiceName=mongodb/blog*/
//conect to database
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.Promise = global.Promise;/*mongoose + ecma6 */
mongoose.connection.on('error', (error) => {
    console.error("ERRO:"+error.message);
});

app.set('port', process.env.PORT || 7777); /*set port*/
const server = app.listen(app.get('port'), () => {
    console.log("Server on port: " + server.address().port); 
});