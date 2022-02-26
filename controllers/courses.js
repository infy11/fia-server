const {CourseModal} = require('../models/courses');

const getCourses = async (req,res,next) =>{
    const {courseName} = req.query;
    const data =  await CourseModal.find({
         courseName: courseName
    }).lean();


    res.send(data);
};

const getAllCourses = async (req, res, next) => {
    const data = await CourseModal.find({}).lean();
    res.send(data);
}


const saveCourse = async (req, res) => {
    console.log('req.body for course', req.body);
    const response  = new CourseModal(req.body).save((res, err)=>{
        if(err) {
            console.log('mongoose error',err)
        }
        console.log('res for mongoose', res);
    })
    res.send({success:true})
}

const deleteCourse = async(req, res) => {
    const {courseName} = req.body;
    const response = await CourseModal.deleteOne({
        courseName: courseName
    })
    res.send({success:true});
}

const updateCourse = async(req, res, next) => {
    const {originalCourseName, courseName, subjects } = req.body;
    if(!originalCourseName) {
        res.send({error: 'original course name is missing'})
        return ;
    }
    const response  = await CourseModal.findOneAndUpdate({courseName: originalCourseName}, {
        courseName: courseName,
        subjects: subjects
    });
    res.send({success: true});
}
module.exports = {
    getCourses,
    saveCourse,
    deleteCourse,
    getAllCourses,
    updateCourse
}
