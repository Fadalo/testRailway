const User = require('../models/User');
const UserController = require('../controllers/user');
const helpers = require('../controllers/helpers');



module.exports = viewRoutes = (app,db,config) => {
app.get('/', async  (req, res) => {

  var param  = await helpers.doGetParam(req,res,config,'Dashboard');
  res.render('dashboard',param);
});
app.get('/login', async (req, res) => {

  var param  = await helpers.doGetParam(req,res,config,'Login');
  res.render('login',param);

});
app.get('/loggout', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/course', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'listCourses');
  res.render('listCourses',param);
});

app.get('/course/createCourse', async (req, res) => {

  var param  = await helpers.doGetParam(req,res,config,'createCourse');
  res.render('createCourse',param);
});

app.get('/course/updateCourse', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'updateCourse');
  res.render('updateCourse',param);
});
app.get('/course/updateCourse/:id', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'updateCourse');
  res.render('updateCourse',param);
});
app.get('/course/deleteCourse', async (req, res) => {
  
  var param  = await helpers.doGetParam(req,res,config,'deleteCourse');
  res.render('deleteCourse',param);
});

app.get('/leason', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'deleteLeason');
  res.render('deleteLeason',param);
});
app.get('/leason/createLeason', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'createLeason');
  res.render('createLeason',param);
});
app.get('/leason/updateLeason', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'updateLeason');
  res.render('updateLeason',param);
});
app.get('/leason/deleteLeason', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'deleteLeason');
  res.render('deleteLeason',param);
});

app.get('/material', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'listMaterial');
  res.render('listMaterial',param);
});
app.get('/material/createMaterial', async (req, res) => {

  var param  = await helpers.doGetParam(req,res,config,'createMaterial');
  res.render('createMaterial',param);
});
app.get('/material/updateMaterial', async (req, res) => {
  
  var param  = await helpers.doGetParam(req,res,config,'updateMaterial');
  res.render('updateMaterial',param);
});
app.get('/material/deleteMaterial', async (req, res) => {
 
  var param  = await helpers.doGetParam(req,res,config,'deleteMaterial');
  res.render('deleteMaterial',param);
});

app.get('/profile/editProfile', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'editProfile');
  res.render('editProfile',param);
});
app.get('/profile/changeProfile', async (req, res) => {
 
  var param  = await helpers.doGetParam(req,res,config,'changeProfile');
  res.render('changeProfile',param);
});
app.get('/profile/changePassword', async (req, res) => {
  var param  = await helpers.doGetParam(req,res,config,'changePassword');
  res.render('changePassword',param);
});

}
