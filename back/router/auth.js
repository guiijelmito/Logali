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
    //recebe o email e a senha do usuário
    const {email, password} = req.body; 
    
    //abre o bd(arquivo)
    const jsonPath = path.join(__dirname, '..', 'banco', 'data.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    //verifica se existe usuario com email    
    for (let user of usuariosCadastrados){
        if(user.email === email){
            //usuario existe, checa a senha
            const passwordValidado = await bcrypt.compare(password, user.password);
            if(passwordValidado===true){
                // devolve um token para que o usuário possa acessar a homepage
                
                const tokenAcesso = jwt.sign(user,process.env.TOKEN);
                return res.status(200).json(tokenAcesso);
            }
                
            else
                return res.status(422).send(`Usuario ou senhas incorretas.`);
        }   
    }
    //usuário inexistente.
    return res.status(409).send(`Usuario com email ${email} não existe. Considere criar uma conta!`);

})

router.post('/create', async (req,res) => {
    
    const {username, email, password} = req.body; 
    
    const jsonPath = path.join(__dirname, '..', 'banco', 'data.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));
    
    // checa se o usuário já existe
    for (let users of usuariosCadastrados){
        if(users.email === email){
            //usuario já existe.
            return res.status(409).send(`Usuario com email ${email} já existe.`);
        }   
    }
    //id incrementa com base na qtd de usuários do banco
    const id = usuariosCadastrados.length + 1;
    
    //gerar uma senha cryptografada
    const salt = await bcrypt.genSalt(10);
    const passwordCrypt = await bcrypt.hash(password,salt);

    //Criacao do novo user
    const user = new User(id, username, email, passwordCrypt);

    //Salva user no "banco"
    usuariosCadastrados.push(user);
    fs.writeFileSync(jsonPath,JSON.stringify(usuariosCadastrados,null,2));
    res.send(`Tudo certo usuario criado com sucesso. id=${id}`);
});



// fica por ultimo
module.exports = router;