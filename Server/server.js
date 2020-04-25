const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const cors = require('cors'); // enable cors for the origin
var port = process.env.PORT || 2020;
const validator = require('./validator'); 
const morgan = require('morgan'); 

//Routes
const managerRoute = require('./routes/managers');
const employeeRoute = require('./routes/employees');

app.use(morgan('dev')); //logged all the heated requests
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: 1024102420, type: 'application/json' }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", req.headers.origin);
    res.header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.use('/api/validate', validator);
app.use('/api/managers', managerRoute);
app.use('/api/employee', employeeRoute);

// my custom error-handling
app.use((req,res,next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

// database related errors-handling as well as all types of errors hanling
app.use((error,req,res,next) => {
    res.status(error.status || 500);
    res.json({
        error : error.message
    })
})

app.listen(port)
console.warn('Magic happens at http://localhost:' + port);