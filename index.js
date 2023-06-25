const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const path = require('path');
var cors = require('cors');
const oneDay = 1000 * 60 * 60 * 24;
//const cookieSession = require('cookie-session');
const config = require('./config/keys');




// Enable Connection MongoDB
mongoose.connect(config.mongoURI); 
var bodyParser = require('body-parser');
const app = express();

// Enabled --create application/x-www-form-urlencoded parser

var jsonParser = bodyParser.json();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

// Enabled Session
app.set('trust proxy', 1);
app.use(cookieParser());
app.enable('trust proxy');
app.use(session({
  
  secret: config.cookieKey, // Replace with your own secret key
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: oneDay }, // Set secure to true if using HTTPS
}));

// Enabled View EJS
app.set("view engine", "ejs");
app.set('views',  [
  path.join(__dirname, '/views'),
  path.join(__dirname, '/views/module/courses'),
  path.join(__dirname, '/views/module/leason'),
  path.join(__dirname, '/views/module/material'),
  path.join(__dirname, '/views/module/users')]);

app.use(express.static(path.join(__dirname, 'public')));
const db = mongoose.connect(config.mongoURI);
config['urlencodedParser'] = urlencodedParser;


// Load Router
require('./routes/mainRoutes')(app,db,config);
//route for index page
//app.get('*', function(req, res) {
  // res.redirect('/');
 //});


const port = process.env.PORT || 3000;
//app.listen(port,"0.0.0.0", () => {

app.listen(port,"0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`)
})
