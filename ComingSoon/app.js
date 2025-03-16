var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cons = require('consolidate');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var newfeaturesRouter = require('./routes/newfeatures');
var contactRouter = require('./routes/contact');
var newsletterRouter = require('./routes/newsletter');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.engine('html', cons.swig)
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'html');

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/newfeatures', newfeaturesRouter);
app.use('/contact', contactRouter);
app.use('/newsleter', newsletterRouter);

module.exports = app;
