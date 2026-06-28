/**
 * The Company schema should have the following fields:

- name: String
- description: String
- headquarters: String
- industry: String
- _employees: [EmployeeSchema]_

The Employee schema should have the following fields:

- firstName: String
- lastName: String
- company: CompanySchema
- startDate: Date
- jobTitle: String
- resigned: Boolean
- salary: Number
- _manager: EmployeeSchema_ (optional)*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const CompanySchema = new Schema({
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    headquarters:{
        type: String,
        required: false
    },
    industry:{
        type: String,
        required: true
    },
    _employees:[{
        type: Schema.Types.ObjectId,
        ref: 'Employee' 
    }]

})

const EmployeeSchema = new Schema({
    firstName:{
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    company:{
        type: Schema.Types.ObjectId,
        ref: 'Company' 
    },
    startDate:{
        type: Date      
    },
    jobTitle:{
        type: String,
    },
    resigned:{
        type: Boolean,
        required: true
    },
    salary:{
        type: Number,
        required: true
    },
    _manager:{
        type: Schema.Types.ObjectId,
        ref: 'Employee' 
    }


})



const Employee = mongoose.model('Employee', EmployeeSchema);
const Company = mongoose.model('Company', CompanySchema);

module.exports = {
    Employee,
    Company
};