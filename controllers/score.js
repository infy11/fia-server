const Students = require('../models/students');

const saveScore = async (req, res) => {
    const {original_roll_no, score} = req.body;
    console.log('score', score);
    const response  =  Students.findOneAndUpdate({
        roll_no: original_roll_no
    }, {score: {
        courseName: score.courseName,
        subjects: score.subjects
        }}).then(res=>{
        console.log('mongoose res', res);
    }).catch(err=>{
        console.log('error', err);
    })
    res.send({success:true})
}



module.exports = {
  saveScore
}
