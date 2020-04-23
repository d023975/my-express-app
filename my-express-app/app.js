var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var createError = require('http-errors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var checkRouter = require('./routes/check');

var config = require('./config/localConf');

var app = express();

const env = process.env.NODE_ENV || 'development'; //changed  due to webpack error

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = config.vcap_services.mongodb[0].credentials.uri;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// view engine setup
app.engine('pug', require('pug').__express); //inserted due to webpack error
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static( path.join(__dirname, 'public'))); //serve static files from here
// app.use('/media' , express.static(path.join(__dirname, 'public'))); //serve static files from here with virtual prefix /media

app.use('/index', indexRouter);
app.use('/users', usersRouter);
app.use('/', checkRouter);

app.use(function(req, res, next) {
	// catch 404 and forward to error handler
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
