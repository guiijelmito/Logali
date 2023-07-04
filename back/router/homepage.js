const express = require('express');
const router = express.Router();

//arquivos
const fs = require('fs');
const path = require('path');

//autenticacao e cryp
const jwt = require('jsonwebtoken');

router.get('/', autenticarToken, (req, res) => {

    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    // ordena as postagens por data de postagens, mais recentes primeiro
    postagens.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

    return res.json(postagens);

})

router.post('/newPost', autenticarToken, (req, res) =>{
    
    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));
    
    // Obtém o conteúdo e o autor da postagem a partir do corpo da requisição
    const { username, texto, tags } = req.body;

    // Cria uma nova instância da classe Postagem
    const novaPostagem = new Postagem(username, texto, tags);

    // Adiciona a nova postagem ao array de postagens
    postagens.push(novaPostagem);
    fs.writeFileSync(jsonPath,JSON.stringify(postagens,null,2));
    res.send(`Nova postagem adiconada com sucesso`);

})


function autenticarToken (req,res,next){
    const authH = req.headers['authorization'];
    const token = authH && authH.split(' ')[1];
    if(token === null) return res.status(401).send('Token não encontrado');

    //verificando o token
    jwt.verify(token, process.env.TOKEN, (err, user) => {
        if(err) return res.status(403).send('Token inválido');
        next();
    })
}

module.exports = router;