var express = require('express');
var apiRoutes = express.Router();
const UserController = require('../controllers/user');
const helpers = require('../controllers/helpers');
const bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
const urlencodedParser = bodyParser.urlencoded({ extended: false })


// Route API DOCUMENTATION
apiRoutes.get('/', (req, res) => {
  res.send('home');
});

// Route API LOGIN
apiRoutes.get('/login',  async(req, res) => {
 res.send(req.session.currUser);
});
apiRoutes.post('/login', urlencodedParser,async(req, res) => {
  res.send(await UserController.doLogin(req,res));
});


// ROUTE API GET LOGOUT
apiRoutes.get('/logout', async (req, res) => {
  req.session.unset('currUser');
  req.session.save (async(err) => {
    if (err) {
      console.error('Error destroying session:', err);
    } else {
      res.send('Session deleted successfully.');
       var param  = await helpers.doGetParam(req,res,config,'Login');
       res.render('login',param);
    }
  });
  
});

// ROUTE API REGISTER
apiRoutes.get('/register',urlencodedParser, async (req, res) => {
  res.send(await UserController.doRegister(req,res));
});
apiRoutes.post('/register', urlencodedParser, async (req, res) => {
  res.send( await  UserController.doRegister(req,res));
 
});
  

// LIST MUST HAVE LOGIN
/* ROUTE COURSE */ 
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


// ROUTE EDIT PROFILE
apiRoutes.get('/editProfile', async(req, res) => {
  res.send( await  UserController.doEditProfile(req,res));
});

apiRoutes.post('/editProfile', async(req, res) => {
  res.send( await  UserController.doEditProfile(req,res));
 });
apiRoutes.get('/changeProfile', (req, res) => {
  res.send(config.prodUrl+'/api/login');
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