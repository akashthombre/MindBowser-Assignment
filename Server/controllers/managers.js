const Manager = require('../models/managers');
const jwt = require('jsonwebtoken');
const config = require('../config');

function login(req,res) {
    Manager.findOne({
        where: { email: req.body.email, password: req.body.password }
    }).then(manager => {
        if (manager) {
            const payload = {
                managerId: manager.id,
                first_name: manager.first_name,
                last_name: manager.last_name,
                email: manager.email
            }
            const token = jwt.sign(payload, config.secret, {
                expiresIn: 2400 //token will expires in 24 hrs
            });
            return res.json({
                success: true,
                message: 'Login Success!',
                token: token
            })
        } else {
            res.json({ success: false, message: 'Invalid username or password !' })
        }
    }).catch(err => {
        res.json({ success: false, message: err.message })
    });
}

function getAllManagers(req, res) {
    try {  
        Manager
            .findAll()
            .then(managers => {
                res.json({ success: true, data: managers })
            }).catch(err => {
                res.status(500).json({ success: false, message: err.message });
            })
    } catch (ex) {
        res.json({ success: false, message: ex })
    }
}

function managerSignUp(req, res) {
    try {
        Manager.findOne({
            where: { email: req.body.email }
        }).then(user => {
            if (user) {
                res.json({
                    success: false, message: 'Email already exist.'
                })
            } else {
                let manager = new Manager({
                    first_name: req.body.first_name,
                    last_name: req.body.last_name,
                    email: req.body.email,
                    password: req.body.password,
                    address: req.body.address,
                    company: req.body.company,
                });

                manager
                    .save()
                    .then(data => {
                        res.json({ success: true, message: 'Manager added successfully !' });
                    })
                    .catch(err => {
                        res.json({ success: false, message: err.message })
                    })
            }

        }).catch(err => {
            res.json({ success: false, message: err.message })
        })
    } catch (ex) {
        res.json({ success: false, message: ex })
    }

}




module.exports = {
    getAllManagers,
    managerSignUp,
    login
}