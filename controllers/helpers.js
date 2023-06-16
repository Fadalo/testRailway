const UserController = require('../controllers/user');


const helpers = {
    "doGetParam" : async(req,res,config,currPage)=>{
        var userCurr = await UserController.doGetCurrentUser(req,res);
        var param = {'userCurr':userCurr};
        config.pages.currentPages = currPage;
        return {
            "pages" : config.pages,
            "param" : param
        }
    }
} 
module.exports = helpers;