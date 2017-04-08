var express = require("express"),
  app = express(),
  bodyParser = require("body-parser"),
  multer = require("multer"),
  morgan = require("morgan"),
  mongoose = require("mongoose"),
  jwt = require("jsonwebtoken"),
  config = require("./config").config(),
  path = require("path"),
  routes = require("./routes/routes"),
  bluebird = require("bluebird");

// ---- APP CONFIGURATION ----


console.log("Server.js");

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
  city: require('./app/handlers/city'),
  consultation: require('./app/handlers/consultation'),
  product: require('./app/handlers/product'),
  store: require('./app/handlers/store'),
  storeCommunity: require('./app/handlers/storeCommunity')
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

module.exports = server;
