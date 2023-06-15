const express = require('express');
const router = express.Router();

const logoutConstroller = require('../controllers/logoutController');

router.get('/', logoutConstroller.logout);

module.exports = router;
