const express = require('express');
const router = express.Router();
const managersController = require('../controllers/managers');

router.post('/managerSignUp',managersController.managerSignUp);
router.post('/login',managersController.login);

module.exports = router;
