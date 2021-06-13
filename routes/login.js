const express = require('express');
const router = express.Router();
const {login} = require('../controllers/loginController')

/* GET login page. */
router.get('/', login);

module.exports = router;
