const express = require('express');
const router = express.Router();
const studentsController = require('../controllers/students');
const CoursesController = require('../controllers/courses');
const upload = require('../utils/file_upload');
const scoreController = require('../controllers/score');
const loginController = require('../controllers/login');
const authenticatorMiddleWare = require('../middlewares/authenticator');
/* GET users listing. */
router.get('/student', studentsController.getStudent);
router.get('/student/all',authenticatorMiddleWare,upload.single('image'), studentsController.getAllStudents);
router.post('/student',authenticatorMiddleWare, upload.single('image'), studentsController.postStudent);
router.delete('/student', authenticatorMiddleWare, studentsController.deleteStudent );
router.patch('/student', authenticatorMiddleWare,upload.single('image'), studentsController.updateStudent);
router.get('/course',authenticatorMiddleWare, CoursesController.getCourses);
router.get('/course/all', authenticatorMiddleWare,CoursesController.getAllCourses)
router.post('/course', authenticatorMiddleWare, CoursesController.saveCourse);
router.delete('/course',authenticatorMiddleWare, CoursesController.deleteCourse);
router.patch('/course',authenticatorMiddleWare, CoursesController.updateCourse);
router.patch('/score', authenticatorMiddleWare,scoreController.saveScore );
router.post('/login', loginController.login );

module.exports = router;
