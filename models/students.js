const {mongoose} = require('../initDB');

const studentsSchema = new mongoose.Schema({
    roll_no: String,
    name: String,
    father_name: String,
    mother_name: String,
    dob: String,
    address: String,
    course_name: String,
    mob_no: String,
    computer_fundamental: String,
    operating_system: String,
    microsoft_office: String,
    internet: String,
    project: String,
    total: String,
    percentage: String,
    grade: String
});

const Students = mongoose.model('students', studentsSchema);

module.exports = Students;