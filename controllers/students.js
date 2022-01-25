const Students = require('../models/students');

const getStudents = async (req,res,next) =>{
    const {roll_no} = req.query;
    const data =  await Students.find({
        roll_no: roll_no
    }).lean();

    data[0].imageURL = `/images/${roll_no}.jpg`;
    res.send(data);
};

module.exports = {
    getStudents
}