var express = require('express');
var viewRoutes = express.Router();

viewRoutes.get('/', (req, res) => {
  res.render('dashboard');
});
viewRoutes.get('/login', (req, res) => {
  res.render('login');
});
viewRoutes.get('/loggout', (req, res) => {
  res.render('login');
});

viewRoutes.get('/register', (req, res) => {
  res.render('register');
});

viewRoutes.get('/course', (req, res) => {
  res.render('listCourses');
});
viewRoutes.get('/course/createCourse', (req, res) => {
  res.render('createCourse');
});
viewRoutes.get('/course/updateCourse', (req, res) => {
  res.render('updateCourse');
});
viewRoutes.get('/course/deleteCourse', (req, res) => {
  res.render('deleteCourse');
});

viewRoutes.get('/leason', (req, res) => {
  res.render('listLeason');
});
viewRoutes.get('/leason/createLeason', (req, res) => {
  res.render('createLeason');
});
viewRoutes.get('/leason/updateLeason', (req, res) => {
  res.render('updateLeason');
});
viewRoutes.get('/leason/deleteLeason', (req, res) => {
  res.render('deleteLeason');
});

viewRoutes.get('/material', (req, res) => {
  res.render('listMaterial');
});
viewRoutes.get('/material/createMaterial', (req, res) => {
  res.render('createMaterial');
});
viewRoutes.get('/material/updateMaterial', (req, res) => {
  res.render('updateMaterial');
});
viewRoutes.get('/material/deleteMaterial', (req, res) => {
  res.render('deleteMaterial');
});

viewRoutes.get('/profile/editProfile', (req, res) => {
  res.render('editProfile');
});
viewRoutes.get('/profile/changeProfile', (req, res) => {
  res.render('changeProfile');
});
viewRoutes.get('/profile/changePassword', (req, res) => {
  res.render('changePassword');
});





module.exports = viewRoutes;