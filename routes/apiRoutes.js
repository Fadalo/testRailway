var express = require('express');
var apiRoutes = express.Router();


apiRoutes.get('/', (req, res) => {
  res.send('home');
});
apiRoutes.post('/login', (req, res) => {

  res.send('register');
});
apiRoutes.get('/register', (req, res) => {
  res.send('register');
});
apiRoutes.post('/register', (req, res) => {
    res.send('register');
  });
  


/* COURSE SECTION */ 
apiRoutes.get('/createCourse', (req, res) => {
  res.send('createCourse');
});
apiRoutes.post('/createCourse', (req, res) => {
    res.send('createCourse');
  });
  
apiRoutes.get('/updateCourse', (req, res) => {
  res.send('updateCourse');
});
apiRoutes.post('/updateCourse', (req, res) => {
    res.send('updateCourse');
  });

apiRoutes.get('/deleteCourse', (req, res) => {
  res.send('deleteCourse');
});
apiRoutes.post('/deleteCourse', (req, res) => {
    res.send('deleteCourse');
  });

/* END COURSE SECTION */


apiRoutes.get('/editProfile', (req, res) => {
  res.send('editProfile');
});
apiRoutes.post('/editProfile', (req, res) => {
    res.send('editProfile');
  });

apiRoutes.get('/changeProfile', (req, res) => {
  res.send('changeProfile');
});
apiRoutes.post('/changeProfile', (req, res) => {
    res.send('changeProfile');
  });
  
apiRoutes.get('/changePassword', (req, res) => {
  res.send('changePassword');
});
apiRoutes.post('/changePassword', (req, res) => {
    res.send('changePassword');
});
  






module.exports = apiRoutes;