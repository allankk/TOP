var express = require('express');
var router = express.Router();

const messages = [
    {
        text: "Hi there!",
        user: "Amando",
        added: new Date()
    },
    {
        text: "Hello World!",
        user: "Charles",
        added: new Date()
    }
]

// Get home page
router.get('/', function(req, res, next) {
    res.render('index', { title: 'messageboard', messages: messages });
});

// receive information from the site
router.post('/new', function(req, res, next) {
    messages.push({
        text: req.body.message, 
        user: req.body.name, 
        added: new Date()
        });

    res.redirect('/');
})

module.exports = router;