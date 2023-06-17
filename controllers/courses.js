
const Course = require('../models/Course');
//const bodyParser = require('body-parser')

const coursesController = {

    'module' : 'Course',
    'doFindById' : async (id)=>{
            return await Course.findById(id);
    },
    'doFindAll' : async (req,res)=>{
            return await Course.find({});
    },
    'doSave': async(req,res)=>{
        var  param = {
              
                "name": req.body.txtCourseName,
                "category": req.body.ddlCourseCategory,
                "oneLiner": req.body.txtOneLiner,
                "duration": req.body.iDurationHours,
                "language": req.body.txtLanguage,
                "description": req.body.txtDescription,
               // "photo": req.body.fileCoverPhoto
       };
       console.log(req.body);

        // Check User If Already Exist -> return user already exist
        var checkCourseExist =  await Course.find({'name':param.name}).exec();
        if (checkCourseExist.length >= 1 ){ 
                return {'result':'course already exist'}
        }else{
           // Create New User
           Course = new Course(param);
           var newCourse = await Course.save();

           // Get UserInfo;
           if (newCourse.id != ""){
                // Can Login
                var filterOutputCourse = {
                    'id': newCourse.id,
                    "name": newCourse.name,
                    "category": newCourse.category,
                    "oneLiner": newCourse.oneLiner,
                    "duration": newCourse.duration,
                    "language": newCourse.language,
                    "description": newCourse.description,
                    "photo": newCourse.photo
                }
               
                //console.log(filterOutputUser);
                return {'result':'ok','cid':filterOutputCourse.id,'course':filterOutputCourse};
           }
          else
           {     // Cannot Login
                return {'result':'not found','cid':''};
           }
        }


    },
    'doUpdate' : async (req,res) =>{ 

        console.log('update');
    },
    'doDelete' : async ( req,res) =>{ 

        console.log('delete');
    }
}

module.exports = coursesController