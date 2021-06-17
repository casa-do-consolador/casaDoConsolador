const express = require('express');
const {novoAtendimento} = require('../controllers/novoAtendimento')
const router = express.Router();

//página de cadastro de novo atendimento.
router.get('/novoAtendimento', novoAtendimento);

module.exports = router;