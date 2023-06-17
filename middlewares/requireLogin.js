
module.exports = (req, res, next) => {
    //return res.status(401).send(req);
    if (!req.session.currUser) {
      
      //return res.status(401).send({ error: 'You must log in!' });
      return res.redirect('/login');
    }
    next();
};
  