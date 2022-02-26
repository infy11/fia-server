const {mongoose} = require('../initDB');
const {courseSchema} = require('./courses');
const {scoreSchema} = require('./Score');


const studentsSchema = new mongoose.Schema({
    roll_no: String,
    name: String,
    father_name: String,
    mother_name: String,
    dob: String,
    address: String,
    course_name: String,
    mob_no: String,
    course: courseSchema,
    score: scoreSchema,
    image: String,
});

const Students = mongoose.model('students', studentsSchema);

module.exports = Students;
