const express = require('express');
const {homeLista} = require('../controllers/voluntariosController')
const router = express.Router();

//lista voluntários (difere da lista do admin)
router.get('/', homeLista);

module.exports = router;

