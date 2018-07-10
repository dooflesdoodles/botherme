/**
 *  Express server setup
 */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const util = require('./util.js');


const app = express();

// development settings, this has to be set before the static router is added
if (process.env.NODE_ENV === 'dev') {
  util.loadWebpackDevMiddleware(app);
}

if (process.env.NODE_ENV !== 'test') {
  app.use(logger(process.env.NODE_ENV === 'dev' ? 'dev' : 'common'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'client')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  console.log(err);
  res.sendFile(util.staticFile('html/404.html'));
});


module.exports = app;
