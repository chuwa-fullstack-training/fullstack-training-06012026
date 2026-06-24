require('dotenv').config()
require('./connect.js');
const express = require('express');
const app = express();
const api = require('./api');
const PORT = process.env.PORT||3000;


app.use(express.json());


app.post('/api/companies', api.createCompany);
app.post('/api/employees', api.createEmployee);
app.get('/api/companies/:id', api.getCompanyById);
app.get('/api/employees/:id', api.getEmployeeById);
app.put('/api/companies/:id', api.updateCompanyById);
app.put('/api/employees/:id', api.updateEmployeeById);
app.delete('/api/companies/:id', api.deleteCompanyById);
app.delete('/api/employees/:id', api.deleteEmployeeById);
app.get('/api/companies', api.getAllCompanies);
app.get('/api/employees', api.getAllEmployees);
app.get('/api/companies/:companyId/employees', api.getEmployeesOfCompany);


app.listen(PORT, ()=>{
    console.log('Server running on port:', PORT);
});