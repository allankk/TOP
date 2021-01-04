var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  console.log('Requested information');
  next();
})

router.get('/cool', function(req, res, next) {
  res.send("You're so cool");
})

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
