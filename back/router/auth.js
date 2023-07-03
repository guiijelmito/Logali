//rotas
const express = require('express');
const router = express.Router();

//arquivos
const fs = require('fs');
const path = require('path');

//autenticacao e cryp
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/User');

//dotenv
require('dotenv').config();

//Requisicao com POST publica para autenticar usuário
router.post('/login', async (req,res) => {
    // aqui vai toda a autenticação da conta para fazer o login
})



// fica por ultimo
module.exports = router;