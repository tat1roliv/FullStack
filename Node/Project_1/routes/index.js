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
        nome: req.query.nome,
        idade: req.query.idade,
        mostrar: true,
        ingredientes: [
            //{item: 'arroz', qt: '20g'}, 
            //{item: 'salsa', qt: '100g'}
        ],
        interesses:['node', 'js', 'css'],
        teste: '<strong>strong test</strong>'
    };
    res.render('home', obj );
});

module.exports = router;