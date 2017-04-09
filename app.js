const express = require('express'),
  bluebird = require("bluebird"),
  bodyParser = require('body-parser'),
  config = require("./config").config(),
  path = require('path'),
  favicon = require('serve-favicon'),
  logger = require('morgan'),
  multer = require("multer"),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  cookieParser = require('cookie-parser'),
  index = require('./routes/index'),
  users = require('./routes/users'),
  app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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

// Server configuration

// log all requests to the console
if (process.env.NODE_ENV !== 'test')
  app.use(morgan("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(multer({ dest: config.uploads_dir }));

// handle CORS requests
app.use(function(req, res, next){
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type,x-access-token");

  if ('OPTIONS' === req.method)
    res.send(200);
  else
    next();
})

// database connection
if (!mongoose.connection.readyState) {
  mongoose.Promise = bluebird;
  mongoose.connect(config.database, { promiseLibrary: bluebird });
  mongoose.set('debug', (!process.env.NODE_ENV || process.env.NODE_ENV === 'development'));
}

// app route
app.use('/app', express.static(path.join(__dirname, '/app')));

// set static files location
app.use(express.static(path.join(__dirname, "/public")));

// Request Handlers
var handlers = {
  addCity: require('./app/handlers/city/addCityHandler'),
  addStoreCommunity: require('./app/handlers/city/addStoreCommunityHandler'),
  addConsultation: require('./app/handlers/consultation/addConsultationHandler'),
  addProduct: require('./app/handlers/product/addProductHandler'),
  addStoreProduct: require('./app/handlers/store/addStoreProductHandler'),
  changeStoreProduct: require('./app/handlers/store/changeStoreProductHandler'),
  addStore: require('./app/handlers/storeCommunity/addStoreHandler')
};

// Application routes
routes.setup(app, handlers);

// ---- MAIN CATCHALL ROUTE - SEND USERS TO FRONTEND ----
app.get("*", function(req, res){
  res.sendFile(path.join(__dirname, "/public/app/views/index.html"));
});

// ---- START SERVER ----
var port = process.env.PORT || 8085;
var server = app.listen(port, function(){
  if (process.env.NODE_ENV !== 'test') console.log("Server running on port " + port);
});

module.exports = app;
