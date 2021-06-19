const express = require('express');
const router = express.Router();
const admin = require('../controllers/dashAdmin')

/* GET login page. */
router.get('/admin-dash', admin.admin);
router.get('/admin-newusers', admin.adminCadastrarUsuario);

module.exports = router;
