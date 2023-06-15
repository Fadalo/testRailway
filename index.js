const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const config = require('./config/keys');

mongoose.connect(config.mongoURI);
const User = require('./models/User');

//require('./services/passport');

const result =  User.createCollection();
console.log(result);

const app = express();

app.set("view engine", "ejs");
app.set('views',  [
  path.join(__dirname, '/views'),
  path.join(__dirname, '/views/module/courses'),
  path.join(__dirname, '/views/module/leason'),
  path.join(__dirname, '/views/module/material'),
  path.join(__dirname, '/views/module/users')]);

app.use(express.static(path.join(__dirname, 'public')));
const db = mongoose.connect(config.mongoURI);


require('./routes/mainRoutes')(app,db,config);
//route for index page



const port = process.env.PORT || 3000;
app.listen(port,"0.0.0.0", () => {
  console.log(`Example app listening on port ${port}`)
})
