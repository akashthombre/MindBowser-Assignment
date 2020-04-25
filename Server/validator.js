const jwt = require('jsonwebtoken');
var config = require('./config');
var express = require('express');
var router = express.Router();
router.get('/user/:id', isAuthorized)

function isAuthorized(req, res) {
	// check header or url parameters or post parameters for token
	var token = req.params.id;
	if (token) {
		// verifies secret and checks exp
		jwt.verify(token, config.secret, function (err, decoded) {
			if (err) {
				return res.json({ success: false, message: 'Failed to authenticate token.', sessionEnd: true });
			} else {
				// if everything is good, save to request for use in other routes
				res.json({ success: true, sessionEnd: false })
			}
		});
	} else {
		// if there is no token
		// return an error
		return res.send({
			success: false,
			message: 'No token provided.',
			sessionEnd: true
		});
	}
}
module.exports = router;
