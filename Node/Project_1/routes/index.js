const express = require('express'); /*importing express lib*/

//Routes
const router = express.Router();
router.get('/', (req, res) => {
    res.send('holaquetal reload remix');
});
router.get('/about', (req, res) => {
    res.send('about me page');
});

module.exports = router;