var express = require('express');


module.exports = mainRoutes = (app,db,config) => {

  
  require('./testRoutes')(app,db,config);
  require('./viewRoutes')(app,db,config);
  //app.use(require('./viewRoutes'));
  app.use('/api', require('./apiRoutes'));
};
