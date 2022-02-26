const {mongoose} = require('../initDB');
const {subjectSchema} = require('./subjects');

const scoreSchema = new mongoose.Schema({
    courseName: '',
    subjects:[subjectSchema]
});

const Score = mongoose.model('score', scoreSchema);

module.exports = {
    scoreModal: Score,
    scoreSchema: scoreSchema
};

