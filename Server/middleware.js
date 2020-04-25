const jwt = require('jsonwebtoken');
var config = require('./config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers['authorization'];
        const decoded = jwt.verify(token, config.secret);
        next();
    } catch(error) {
        return res.status(401).json({
            message: "Authentication failed"
        })
    }
}