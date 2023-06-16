const User = require('../models/User');
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
    'doDelete' : async ( (req,res) =>{ 

            console.log('delete');
    }),
    'doFindById' : async (id)=>{
            return User.findById(id);
    },
    'doFindAll' : async (req,res)=>{
            return User.find({});
    },
    'doLogin': async (req,res)=>{

        console.log(req);
        result = '';
        return JSON.stringify(result);
    },
    'doGetCurrentUser': async (req,res)=>{
       
       var id = '648ac638a1bee939b953f57f';
       // return id;
       var result = await User.findById(id).exec();
       return JSON.stringify(result);
    }
}
module.exports = userController;