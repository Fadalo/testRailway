
module.exports = viewRoutes = (app,db,config) => {
app.get('/', (req, res) => {
  //const User = require('../models/User');
  //var user = new User();
  //console.log(user);
  res.render('dashboard',{'pages':config.pages});
});
app.get('/login', (req, res) => {
  res.render('login');
});
app.get('/loggout', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

app.get('/course', (req, res) => {
  res.render('listCourses');
});
app.get('/course/createCourse', (req, res) => {
  res.render('createCourse');
});
app.get('/course/updateCourse', (req, res) => {
  res.render('updateCourse');
});
app.get('/course/deleteCourse', (req, res) => {
  res.render('deleteCourse');
});

app.get('/leason', (req, res) => {
  res.render('listLeason');
});
app.get('/leason/createLeason', (req, res) => {
  res.render('createLeason');
});
app.get('/leason/updateLeason', (req, res) => {
  res.render('updateLeason');
});
app.get('/leason/deleteLeason', (req, res) => {
  res.render('deleteLeason');
});

app.get('/material', (req, res) => {
  res.render('listMaterial');
});
app.get('/material/createMaterial', (req, res) => {
  res.render('createMaterial');
});
app.get('/material/updateMaterial', (req, res) => {
  res.render('updateMaterial');
});
app.get('/material/deleteMaterial', (req, res) => {
  res.render('deleteMaterial');
});

app.get('/profile/editProfile', (req, res) => {
  res.render('editProfile');
});
app.get('/profile/changeProfile', (req, res) => {
  res.render('changeProfile');
});
app.get('/profile/changePassword', (req, res) => {
  res.render('changePassword');
});

}
