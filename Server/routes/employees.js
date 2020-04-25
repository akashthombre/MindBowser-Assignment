const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employees');
const checkAuth = require('../middleware');

//All Apis are Authenticated , in headers authenticated token is check to heat apis

router.get('/getAllEmployees',checkAuth,employeeController.getAllEmployees);
router.post('/createEmployee',checkAuth,employeeController.createEmployee);
router.put('/updateEmployee/:id',checkAuth,employeeController.updateEmployee);
router.delete('/deleteEmployeeById/:id',checkAuth,employeeController.deleteEmployeeById);
module.exports = router;
