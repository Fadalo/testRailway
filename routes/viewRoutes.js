const User = require('../models/User');
const request = require('request');
const UserController = require('../controllers/user');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

const helpers = require('../controllers/helpers');
const urlencodedParser = bodyParser.urlencoded({ extended: false })
const requireLogin = require('../middlewares/requireLogin');
const querystring = require('querystring');

module.exports = viewRoutes = (app,db,config) => {
app.get('/',requireLogin, async  (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'Dashboard');
  res.render('dashboard',param);
});
app.get('/dashboard',requireLogin, async  (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'Dashboard');
  res.render('dashboard',param);
});
app.get('/home',requireLogin, async  (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'Home');
  res.render('home',param);
});


// RENDER VIEW LOGIN
app.get('/login',  async (req, res) => {

  var param = {'pages':config.pages}
  res.render('login',param);

});
// RENDER ACTION LOGIN
app.post('/login',urlencodedParser, async (req, res) => {

  
  await request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     'http://localhost:3000/api/login',
    body:    "emailID="+req.body.emailID+"&password="+req.body.password
  }, function(error, response, body){
   // console.log(req.session);
    var resultP = JSON.parse(body)   ; 
    if(resultP.result == "ok" && resultP.cid != ""){
      req.session.currUser = resultP.cid;
      req.session.save(); 
      res.redirect('/'); 
      //res.send(req.session.currName);
    }
    if(resultP.result == "not found" && resultP.cid == ""){
      var param  =  helpers.doGetParam(req,res,config,'Login');
      res.render('login',param); 
      //res.redirect('/login');
    }
    
  });
 
  
});

// RENDER VIEW LOGOUT
app.get('/logout', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'logout');
  req.session.destroy(async(err) => {
     if (err) {
       console.error('Error destroying session:', err);
     } else {
          res.render('login',param);
     }
   });  
});

// RENDER VIEW REGISTER
app.get('/register', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'Login');
  res.render('register',param);
});

// RENDER ACTION REGISTER
app.post('/register',urlencodedParser,async(req,res)=>{
  
  var paramRegister = {
    "txtFullName": req.body.txtFullName,
    "ddlType": req.body.ddlType,
    "txtEmailID": req.body.txtEmailID,
    "txtPassword": req.body.txtPassword
  }

  await request.post({
    headers: {'content-type' : 'application/x-www-form-urlencoded'},
    url:     'http://localhost:3000/api/register',
    body:    querystring.stringify(paramRegister)
  }, function(error, response, body){
   // console.log(req.session);
    var resultRegister = JSON.parse(body)   ; 
    if(resultRegister.result == "ok" && resultRegister.cid != ""){
      req.session.currUser = resultRegister.cid;
      req.session.save(); 
      res.redirect('/'); 
    }
    if(resultRegister.result == "not found" && resultRegister.cid == ""){
      var param  =  helpers.doGetParam(req,res,config,'Login');
      res.render('login',param); 
    }
       
  });
});

// RENDER VIEW COURSE
app.get('/course',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'listCourses');
  res.render('listCourses',param);
});

// RENDER VIEW CREATE COURSE
app.get('/course/createCourse',requireLogin, async (req, res) => {

  var param  = await helpers.doGetParam(req,res,config,'createCourse');
  res.render('createCourse',param);
});

// RENDER VIEW UPDATE COURSE
app.get('/course/updateCourse',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'updateCourse');
  res.render('updateCourse',param);
});

// RENDER VIEW UPDATE COURSE ID
app.get('/course/updateCourse/:id',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'updateCourse');
  res.render('updateCourse',param);
});

// RENDER VIEW DELETE COURSE
app.get('/course/deleteCourse',requireLogin, async (req, res) => {
  
  var param  = await helpers.doGetParam(req,res,config,'deleteCourse');
  res.render('deleteCourse',param);
});

// RENDER VIEW LEASON
app.get('/leason', requireLogin,async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'deleteLeason');
  res.render('deleteLeason',param);
});

// RENDER VIEW CREATE LEASON
app.get('/leason/createLeason',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'createLeason');
  res.render('createLeason',param);
});

// RENDER VIEW UPDATE LEASON
app.get('/leason/updateLeason',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'updateLeason');
  res.render('updateLeason',param);
});

// RENDER VIEW DELETE LEASON
app.get('/leason/deleteLeason',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'deleteLeason');
  res.render('deleteLeason',param);
});

// RENDER VIEW MATERIAL
app.get('/material',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'listMaterial');
  res.render('listMaterial',param);
});

// RENDER VIEW CREATE MATERIAL
app.get('/material/createMaterial', async (req, res) => {

  var param  = await helpers.doGetParam(req,res,config,'createMaterial');
  res.render('createMaterial',param);
});

// RENDER VIEW UPDATE MATERIAL
app.get('/material/updateMaterial', requireLogin,async (req, res) => {
  
  var param  = await helpers.doGetParam(req,res,config,'updateMaterial');
  res.render('updateMaterial',param);
});

// RENDER VIEW DELETE MATERIAL
app.get('/material/deleteMaterial',requireLogin, async (req, res) => {
 
  var param  = await helpers.doGetParam(req,res,config,'deleteMaterial');
  res.render('deleteMaterial',param);
});


// RENDER VIEW EDIT PROFILE

app.get('/profile',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'Profile');
  res.render('Profile',param);
});
app.get('/profile/editProfile',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'editProfile');
  res.render('editProfile',param);
});

// RENDER VIEW CHANGE PROFILE
app.get('/profile/changeProfile',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'changeProfile');
  res.render('changeProfile',param);
});

// RENDER VIEW CHANGE PASSWORD
app.get('/profile/changePassword',requireLogin, async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'changePassword');
  res.render('changePassword',param);
});

}
