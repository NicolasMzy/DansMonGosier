const express = require('express');
const router = express.Router();

const controller = require('./controller');

// Create an account
router.get('/auth', controller.authenticate);

module.exports = router;
