var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('new', {title: 'messageboard'})
})



module.exports = router