const express = require('express'); /*importing express lib*/

//Routes

/*req
GET -> req.query.name
POST -> update app.js
*/

/*req, res*/
const router = express.Router();
router.get('/', (req, res) => {
    res.json(req.query);

    //GET: req.query
    //POST: req.body
    //URL PARAMS: req.params

    //SEND
    //JSON

});


router.get('/posts/:id', (req, res) => {
    let slug = req.params.slug;
    //titulo: hola que tal
    //slug: hola-que-tal
    res.send('SLUG do POST: '+ slug);
});


router.get('/about', (req, res) => {
    res.send('about me page');
});

module.exports = router;