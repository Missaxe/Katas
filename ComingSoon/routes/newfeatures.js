var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/incoming', function (req, res, next) {
    res.render('incoming.html', { title: 'Incoming' });
});

router.get('/data', function (req, res, next) {
    res.sendFile(path.join(__dirname, '../data', 'features.json'));
});

module.exports = router;
