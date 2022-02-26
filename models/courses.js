const {mongoose} = require('../initDB');
const {subjectSchema} = require('./subjects');

const courseSchema = new mongoose.Schema({
    courseName: '',
    subjects:String
});

const Course = mongoose.model('courses', courseSchema);

module.exports = {
    CourseModal: Course,
    courseSchema: courseSchema
};

