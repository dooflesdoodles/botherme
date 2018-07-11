/**
 *  Express server setup
 */

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('express-async-errors');

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const util = require('./util.js');


const app = express();

/**
 *  TODO: make this more scalable: wrap the app in a class that sets up routes and middlewares
 *  in own methods, that add stuff like a config system
 *  TODO: add logger (not the middleware logger)
 */


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// development settings, this has to be set before the static router is added
if (process.env.NODE_ENV === 'dev') {
  util.loadWebpackDevMiddleware(app);
}
if (process.env.NODE_ENV !== 'test') {
  // TODO: use express logger and remove this package from project
  app.use(logger(process.env.NODE_ENV === 'dev' ? 'dev' : 'common'));
}
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser()); // TODO: use express cookie parser and remove this package from project
app.use(express.static(path.join(__dirname, '..', 'client')));
// TODO: add middlewares for: compression, csrf protection, error handling, favicon, timeout

app.use('/', indexRouter);
app.use('/api', apiRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler, TODO: look into existing middlewares
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
