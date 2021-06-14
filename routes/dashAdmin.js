const express = require('express');
const router = express.Router();
const {admin} = require('../controllers/dashAdmin')

/* GET login page. */
router.get('/admin-users', admin);

module.exports = router;
