module.exports = testRoutes = (app,db,pages) => {
 console.log(pages);
  app.use('/test',(req,res)=>{
    
     res.send(pages);
  });
}