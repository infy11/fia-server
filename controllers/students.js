const Students = require('../models/students');
const Courses = require('../models/courses');
const fetch = require('node-fetch');

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
    const {mob_no} = req.body;
    const {roll_no} = req.body;
    req.body.course = course;
    req.body.image = filename;
    new Students(req.body).save().then(_=>{
        return fetch(`https://www.fast2sms.com/dev/bulkV2?authorization=LWv32EPO8G4omRDHC1ejYBVAIacidxyb6MQgnsq5hp9TrNJ0SFAFmR9gV1vQPKCNsetT6uY4c0kSWohM&route=v3&sender_id=Cghpet&message=You%20are%20successfully%20registered%20to%20Future%20IT%20academy%20your%20roll%20no%20is%20${roll_no}%20%7B%7D%20please%20contact%20branch%20for%20further%20details%20&language=english&flash=0&numbers=${mob_no}`)
    }).then(res=>{
        return res.json();
    }).then(res=>{
        console.log('sms response', res)
    }).catch(err=>{
        console.log('error saving student', err);
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


