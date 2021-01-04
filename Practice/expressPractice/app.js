const express = require('express');
const app = express();
const logger = require('morgan');
const port = 3000;

app.use(express.static('public', {
    extensions: ['html', 'htm']
}, () => {
}));

app.use(function(req, res, next){
    res.status(404).send('404 Page not found');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});