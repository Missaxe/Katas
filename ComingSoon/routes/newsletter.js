var express = require('express');
var router = express.Router();
var uuid = require('uuid');

/* GET users listing. */
router.post('/subscribe', function (req, res, next) {
    const { email } = (req.body);

    if (!email) {
        res.sendStatus(400);
    }

    res.send(uuid.v4() + ' ' + email);
});

module.exports = router;
