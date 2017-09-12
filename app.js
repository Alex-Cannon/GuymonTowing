//"import" modules
var express = require('express');
var path = require('path');
var fa = require('fs');
var helmet = require('helmet');
var ejs = require('ejs');

//define our app & port
var app = express();
var port = 3000;

//secure our app
app.use(helmet());

//set the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Link to our routes
var home = require('./routes/home');
var about = require('./routes/about');
var services = require('./routes/services');
var contact = require('./routes/contact');

//Use the PUBLIC folder to find our stylesheets, javascript, and images
app.use(express.static(path.join(__dirname, 'public')));

//Use our routes
app.use('/', home);
app.use('/home', home);
app.use('/about', about);
app.use('/services', services);
app.use('/contact', contact);

//Listen on the given port
app.listen(port, function(){
  console.log("app listening on port 3000");
});

module.exports = app;
