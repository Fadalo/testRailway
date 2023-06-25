
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
            "type":req.body.ddlType,
            "leason" : [],
            "photo": req.body.fileCoverPhoto
         };

        // Check User If Already Exist -> return user already exist
        var checkCourseExist =  await Course.find({'name':param.name}).exec();
        if (checkCourseExist.length >= 1 ){ 
                return {'result':'error','msg':'course already exist'};
        }else{
            // Create New Course
            var CourseClass = new Course(param);
            var newCourse = await CourseClass.save();
            
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
                        "type":newCourse.type,
                        "leason" : newCourse.leason,
                        "photo": newCourse.photo
                    }
                
                    console.log(filterOutputCourse);
                    return {'result':'ok','cid':filterOutputCourse.id,'course':filterOutputCourse};
            }
            else
            {     // Cannot Login
                    return {'result':'not_found','cid':''};
            }
        }
    


    },
    'doUpdate' : async (req,res) =>{ 

        var  param = {
            "id":req.body.id  ,
            "name": req.body.txtCourseName,
            "category": req.body.ddlCourseCategory,
            "oneLiner": req.body.txtOneLiner,
            "duration": req.body.iDurationHours,
            "language": req.body.txtLanguage,
            "description": req.body.txtDescription,
            "type":req.body.ddlType,
            "leason" : [],
            "photo": req.body.fileCoverPhoto
         };

        // Check User If Already Exist -> return user already exist
        var checkCourseExist =  await Course.findById(param.id).exec();
    
        if (checkCourseExist.id != "" ){ 
            //res.send(checkCourseExist.length);
            checkCourseExist.name =   param.name;
            checkCourseExist.category =   param.category;
            checkCourseExist.oneLiner =   param.oneLiner;
            checkCourseExist.duration =   param.duration;
            checkCourseExist.language =   param.language;
            checkCourseExist.description =   param.description;
            checkCourseExist.type =   param.type;
            checkCourseExist.leason =   param.leason;
            checkCourseExist.photo =   param.photo;
            var updateCourse =  await checkCourseExist.save();
            return {'result':'success_update','msg':'couse success updated','cid': updateCourse.id,'course':updateCourse}

        }else{
            return {'result':'error','msg':'course not found'};
        }
    },
    'doDelete' : async ( req,res) =>{ 

        var checkCourseExist =  await Course.findById(req.body.id).exec();
        var deleteCourse = Course.deleteOne({id:checkCourseExist.id}).exec();
        console.log(deleteCourse);
        console.log('delete');
    }
}

module.exports = coursesController