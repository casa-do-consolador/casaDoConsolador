const express = require('express');
const {homeLista} = require('../controllers/voluntariosController')
const router = express.Router();

router.get('/lista_vol', homeLista)

module.exports = router;

