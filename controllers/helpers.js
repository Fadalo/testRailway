const UserController = require('../controllers/user');
const User = require('../models/User');

const helpers = {
    "doGetParam" : async(req,res,config,currPage)=>{
        //var userCurr = await UserController.doGetCurrentUser(req,res);
        var session = req.session;
        console.log('helper:'+JSON.stringify(req.session));
        var id = (session.currUser==undefined)?"":session.currUser;
        console.log(id);
        // var id = '648cb4ae226fc13275e6d4e3';
         if(id !== ""){
                var resultCurrUser = await User.findById(id).exec();
                resultCurrUser1 = JSON.stringify(resultCurrUser);
        } else {
                resultCurrUser1= {};
         }

        var param = {'userCurr':resultCurrUser1};
        config.pages.currentPages = currPage;
        console.log(config); 
        return {
            "pages" : config.pages,
            "param" : param 
        }
    } ,
    "doGetBaseUrl":(req,res)=>{
        return req.headers.host;
    }
}   
module.exports = helpers; 