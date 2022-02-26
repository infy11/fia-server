const Courses = require('../models/courses');

const getCourses = async (req,res,next) =>{
    const {roll_no} = req.query;
    const data =  await Courses.find({
        roll_no: roll_no
    }).lean();

    res.send(data);
};

module.exports = {
    getCourses
}
