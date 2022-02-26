const Students = require('../models/students');
const Courses = require('../models/courses');

const getStudent = async (req,res) =>{
    const {roll_no} = req.query;
    const data =  await Students.find({
        roll_no: roll_no
    }).lean();
    res.send(data);
};

const getAllStudents = async (req,res) => {
    const data = await Students.find({}).lean();
    res.send(data);
}

const postStudent = async (req, res )=> {
    const {courseName} = req.body
    const {filename} = req.file;
    const course = await Courses.CourseModal.findOne({
        courseName: courseName
    }).lean();
    console.log('found the course', course);
    req.body.course = course;
    req.body.image = filename;
    new Students(req.body).save((err,resp)=>{
        if(err) {
            console.log('mongoose error', err)
            res.send({error:true})
        }
    })
    res.send({success: true});
}

const deleteStudent = async(req, res) => {
    const {roll_no} = req.body;
    const response = await Students.deleteOne({
        roll_no: roll_no
    })
    res.send({success:true});
}

const updateStudent = async(req, res, next) => {
    const {originalRollNo} = req.body;
    delete req.body.originalRollNo;
    if(!originalRollNo) {
        res.send({error: 'original course name is missing'})
        return ;
    }
    const response  = await Students.findOneAndUpdate({roll_no: originalRollNo}, req.body);
    res.send({success: true});
}

module.exports = {
    getStudent,
    postStudent,
    deleteStudent,
    updateStudent,
    getAllStudents
}


