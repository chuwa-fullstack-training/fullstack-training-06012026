const express = require('express');
const router = express.Router();
const { Employee } = require('../models/models');
const mongoose = require('mongoose');

const {
    createCompany,
    createEmployee,
    getCompanyById,
    getEmployeeById,
    updateCompanyById,
    updateEmployeeById,
    deleteCompanyById,
    deleteEmployeeById,
    getAllCompanies,
    getAllEmployees,
    getEmployeesOfCompany,
    logIn
} = require('../controllers/authcontroller');
const { optionalJwt } = require('../middlewares/auth');

router.post('/companies', createCompany);
router.post('/employees', createEmployee);
router.get('/companies/:id', getCompanyById);
router.get('/employees/:id', getEmployeeById);
router.put('/companies/:id', updateCompanyById);
router.put('/employees/:id', updateEmployeeById);
router.delete('/companies/:id', deleteCompanyById);
router.delete('/employees/:id', deleteEmployeeById);
router.get('/companies', getAllCompanies);
router.get('/employees', optionalJwt, getAllEmployees);
router.get('/companies/:companyId/employees', getEmployeesOfCompany);
router.post('/login', logIn);


module.exports = router;
