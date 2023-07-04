require('dotenv').config()

const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const jwt = require('jsonwebtoken');

//rotas de autenticacao
const authRoutes = require('./router/auth');

// rotas das páginas ao usuário
const homepageRoutes = require('./router/homepage')

app.use(express.json());
app.use(cors());
//rotas de autenticacao
app.use('/auth', authRoutes);
app.use('/homePage', homepageRoutes);


app.listen(4000, () => {
    console.log('Servidor na porta 4000');
});

require('crypto').randomBytes(64).toString('hex');
TOKEN