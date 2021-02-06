const express = require('express');

//rotas
const router = express.Router();
router.get('/', (req, res) => {
    res.send('holaquetal, mundo');
});


//configuracoes
const app = express();
app.use('/', router);

module.exports = app;