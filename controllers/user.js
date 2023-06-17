const User = require('../models/User');
//const bodyParser = require('body-parser')
const session = require('express-session');
const userController = {

   // 'module' : User,
    'doSave' :  async (req,res) =>{ 
     
          var user = new User();
            user.name = "hello4";
            var id = await user.save();
            return id;
    },
    'doUpdate' : async (req,res) =>{ 

            console.log('update');
    },
    'doDelete' : async ( req,res) =>{ 

            console.log('delete');
    },
    'doFindById' : async (id)=>{
            return await User.findById(id);
    },
    'doFindAll' : async (req,res)=>{
            return await User.find({});
    },
    'doGetCurrentUser': async (req,res)=>{ 
       
        const id = (req.session == undefined)?"":req.session.currUser;
        if(id !== ""){
                var resultCurrUser = await User.findById(id).exec();
                return JSON.stringify(resultCurrUser);
        } else {
                return {};
        }
        
    },
    'doRegister': async(req,res)=>{
        var  param = {
                'name': req.body.txtFullName,
                'type': req.body.ddlType,
                'emailID': req.body.txtEmailID,
                'password': req.body.txtPassword
       };
       //console.log(req.body); 

        // Check User If Already Exist -> return user already exist
        var checkUserExist =  await User.find({'emailID':param.emailID}).exec();
        if (checkUserExist.length >= 1 ){ 
                return {'result':'user already exist'}
        }else{
           // Create New User
           user = new User(param);
           var newUser = await user.save();

           // Get UserInfo;
           if (newUser.id != ""){
                // Can Login
                var filterOutputUser = {
                        'id': newUser.id,
                        'name': newUser.name,
                        'type': newUser.type,
                        'emailID': newUser.emailID
                }
               
                //console.log(filterOutputUser);
                return {'result':'ok','cid':newUser.id,'user':filterOutputUser};
           }
          else
           {     // Cannot Login
                return {'result':'not found','cid':''};
           }
        }
       
    },
    'doLogin': async  (req,res)=>{
       
      
        var email = req.body.emailID;
        var password = req.body.password;
        var  param = {
                'emailID': email,
                'password': password        
       };
       
       // Find User Using Email & Password , if find then check
       var result = await User.find(param).exec();
       // verifiy record if found set 
       if (result.length >= 1){

                // Can Login
                return {'result':'ok','cid':result[0].id};
        }
        else{
                // Cannot Login
                return {'result':'not found','cid':''};
         }
    },
    "doUpdateProfile": async(req,res)=>{

       var email = req.body.emailID;
       var password = req.body.password;
       var param = {

                'emailID': email,
                'password': password    

       };
       
        // Find User Using Email & Password , if find then check
       var result = await User.find(param).exec();
       // verifiy record if found set  
       if (result.length >= 1){

                // Can Login
                return {'result':'ok','cid':result[0].id};
        }
        else{
                // Cannot Login
                return {'result':'not found','cid':''};
         }
    },
    "doUpdatePassword": async(req,res)=>{

         // Find User Using Email & Password , if find then check
       var result = await User.find(param).exec();
       // verifiy record if found set 
       if (result.length >= 1){

                // Can Login
                return {'result':'ok','cid':result[0].id};
        }
        else{
                // Cannot Login
                return {'result':'not found','cid':''};
         }
    }
}
module.exports = userController;