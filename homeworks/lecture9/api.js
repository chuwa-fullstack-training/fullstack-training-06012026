const mongoose = require('mongoose');
const { Employee, Company} = require('./schema');

//Create a new company
const createCompany = async (req, res) => {
    try{
        const { name, industry} = req.body;

        const newCompany = new Company({
            name: name,
            industry: industry
        })

        const savedCompany = await newCompany.save();
        res.status(201).json(savedCompany);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//Create a new employee
const createEmployee = async(req, res) => {
    try{
        const{ firstName, lastName, company, startDate, resigned, salary } = req.body;

        const newEmployee = new Employee({
            firstName: firstName,
            lastName: lastName,
            company: company,
            startDate: startDate,
            resigned: resigned,
            salary: salary
        })

        const savedEmployee = await newEmployee.save();
        

        await Company.findByIdAndUpdate(
            company, 
            {$push: {_employees: savedEmployee._id}}
        )
        res.status(201).json(savedEmployee);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }

}

//Get a company by id
const getCompanyById = async(req, res) => {
    try{
        const curCompany = await Company.findById(req.params.id);
        if(! curCompany){
            return res.status(404).json({message: 'Company not Found'});
        }
        res.status(200).json(curCompany);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}

//Get an employee by id
const getEmployeeById = async(req, res) => {
    try{
        const curEmployee = await Employee.findById(req.params.id);
        if(!curEmployee){
            return res.status(404).json({message: 'Employee not Found'});
        }
        res.status(200).json(curEmployee);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//Update a company by id
const updateCompanyById = async(req, res) => {
    try{
        const updateCompany = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
        if(!updateCompany){
            return res.status(404).json({message: 'Company not Found'});
        }
        res.status(200).json(updateCompany);
    }
    catch(err){
        res.status(500).json({error: err});
    }
}
//Update an employee by id
const updateEmployeeById = async(req, res) => {
    try{
        const curEmployee = await Employee.findById(req.params.id);
        if(!curEmployee){
            return res.status(404).json({message: 'Employee not found'});
        }

        if(req.body.company){
            const oldId = curEmployee.company? curEmployee.company.toString(): null;
            const newId = req.body.company.toString();
            if(oldId !== newId){
                if(oldId !== null){
                    await Company.findByIdAndUpdate(
                    oldId,
                    {$pull: {_employees: req.params.id}}
                )

                }
                await Company.findByIdAndUpdate(
                    newId,
                    {$push: {_employees: req.params.id}}
                )
            }
        }
        

        const updatedEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        )
        res.status(200).json({message: 'Employee updated', updatedEmployee});

    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//Delete a company by id
const deleteCompanyById = async(req, res) => {
    try{
        const deletedCompay = await Company.findByIdAndDelete(req.params.id);
        if(! deletedCompay){
            return res.status(404).json({message: 'Company not Found'});
        }
        await Employee.updateMany(
            {company: req.params.id},
            {$set: { company: null }}
        )
        res.status(200).json({message: 'Company deleted!', data: deletedCompay});
    }
    catch(err){
        res.status(500).json({eror: err.message});
    }
}
//Delete an employee by id
const deleteEmployeeById = async(req, res) => {
    try{
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);
        if (!deletedEmployee){
            return res.status(404).json({message: 'Employee not Found'});
        }
        if(deletedEmployee.company){
            await Company.findByIdAndUpdate(
                deletedEmployee.company,
                {$pull: {_employees: req.params.id}}
            )
        }
        res.status(200).json({message:'Employee deleted!', data: deletedEmployee});
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//Get all companies
const getAllCompanies = async(req, res) => {
    try{
        const companies = await Company.find({});
        if(companies.length === 0){
            return res.status(404).json({message: 'No company found'});
        }
        res.status(200).json(companies);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//Get all employees
const getAllEmployees = async(req, res) => {
    try{
        const employees = await Employee.find({});
        if(employees.length === 0){
            return res.status(404).json({message: 'No employee found'});
        }
        res.status(200).json(employees);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}
//Get all employees of a company
const getEmployeesOfCompany = async(req, res) => {
    try{
        const curCompany = await Company.findById(req.params.companyId).populate('_employees');
        if(!curCompany){
            return res.status(404).json({message: 'Company not found'});
        }
        if(curCompany._employees.length === 0){
            return res.status(200).json({message: 'This company has no employee', employee: []});
        }
        res.status(200).json(curCompany._employees);
    }
    catch(err){
        res.status(500).json({error: err.message});
    }
}


module.exports = {
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
    getEmployeesOfCompany
};