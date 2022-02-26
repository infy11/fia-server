const {mongoose} = require('../initDB');

const subjectSchema = new mongoose.Schema({
    name: String,
    marks: String
});

const Subject = mongoose.model('subjects', subjectSchema);

module.exports = {
    SubjectModal: Subject,
    subjectSchema: subjectSchema
};
