const express = require('express'); /*importing express lib*/

//Routes
const router = express.Router();
router.get('/', (req, res) => {
    res.send('holaquetal reload');
});


//Config
const app = express(); /*lib for server*/
app.use('/', router);

module.exports = app;