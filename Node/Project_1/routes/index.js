//Routes

/*req
GET -> req.query.name
POST -> update app.js

/*req, res*/
   // res.json(req.query);

    //GET: req.query
    //POST: req.body
    //URL PARAMS: req.params

    //SEND
    //JSON

    /*template engine -> mustache */

const express = require('express'); /*importing express lib*/

const router = express.Router();
router.get('/', (req, res) => {
    let obj = {
        'nome': 'boni',
        'idade': '90'
    };
    res.render('home', obj );
});

module.exports = router;