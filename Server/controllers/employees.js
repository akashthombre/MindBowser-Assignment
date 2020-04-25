const Employee = require('../models/employees');

function getAllEmployees(req, res) {
    Employee.findAll()
        .then(employee => {
            res.json({ success: true, data: employee })
        }).catch(err => {
            res.status(500).json({ success: false, message: err.message });
        })
}

function createEmployee(req, res) {
    let employee = new Employee({
        empid: req.body.empid,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        address: req.body.address,
        dob: req.body.dob,
        mobile: req.body.mobile,
        city: req.body.city,
    });

    employee.save()
        .then(data => {
            res.json({ success: true, message: 'Employee added successfully !' });
        })
        .catch(err => {
            res.json({ success: false, message: err.message })
        })
}

// async await is also used 
async function updateEmployee(req, res) {
    await Employee.findOne({ where: { id: req.params.id } })
        .then((emp) => {
            if (emp) {
                Employee.update({
                    empid: req.body.empid,
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    address: req.body.address,
                    dob: req.body.dob,
                    company: req.body.company,
                    mobile: req.body.mobile,
                    city: req.body.city
                },
                    { where: { id: req.params.id } })
                    .then(() => {
                        res.json({ success: true, message: "Employee updated successfully !" });
                    }).catch(err => {
                        res.json({ success: false, message: err.message });
                    })
            } else {
                res.json({ success: false, message: "No record found !" })
            }
        }).catch(err => {
            res.json({ success: false, message: err.message });
        })

}

function deleteEmployeeById(req, res) {
    Employee.destroy({ where: { id: req.params.id } })
        .then(() => {
            res.json({ success: true, message: "Employee deleted successfully !" });
        }).catch(err => {
            res.json({ success: false, message: err.message });
        })
}


module.exports = {
    getAllEmployees,
    createEmployee,
    updateEmployee,
    deleteEmployeeById
}