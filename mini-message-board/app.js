var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var newRouter = require('./routes/new');

var app = express();

// MONGODB CONNECTION?

// view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// middleware
app.use(logger('dev'));
app.use(express.json()); // only need for POST and PUT. Recognizes request object as a JSON object
app.use(express.urlencoded({ extended: false })) // only need for POST and PUT. Recognizes request object as strings or arrays
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// router urls
app.use('/', indexRouter);
app.use('/new', newRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
})

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
})



module.exports = app;