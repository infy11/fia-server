var express = require('express');
var router = express.Router();
var studentsController = require('../controllers/students');
/* GET users listing. */
router.get('/', studentsController.getStudents);

module.exports = router;
