var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cors = require('cors')
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var apiRouter = require('./routes/api');
var app = express();
require('dotenv').config();
const mongoose = require('./initDB')
const Students = require('./models/students');

mongoose.connectToMongo();
app.use(cors())

// const newStudent = new Students({
//   ROLL_NO: '402001',
//   NAME: 'varnit',
//   'FATHER NAME': 'fatma'
// })
//
// newStudent.save().then(res=>{
//   console.log(res);
// })
//
//
// Students.find({}).then(res=>{
//   console.log('response', res)
// });

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api/v1', apiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
