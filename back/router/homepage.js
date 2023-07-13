const express = require('express');
const router = express.Router();

const Postagem = require('../models/Postagem')

//arquivos
const fs = require('fs');
const path = require('path');

//autenticacao e cryp
const jwt = require('jsonwebtoken');

// página principal
router.get('/homePage', autenticarToken, (req, res) => {

    jwt.verify
    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    // ordena as postagens por data de postagens, mais recentes primeiro
    postagens.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

    return res.json(postagens);

})

//fazer nova postagem
router.post('homePage/newPost', autenticarToken, (req, res) =>{

    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));
    
    // Obtém o conteúdo e o autor da postagem a partir do corpo da requisição
    const username = localStorage.getItem('username')
    const { lugar, texto, tags } = req.body;

    const id = postagens.length + 1;

    const likes = 0;

    // Cria uma nova instância da classe Postagem
    const novaPostagem = new Postagem(username,lugar, texto, tags, id, likes);

    // Adiciona a nova postagem ao array de postagens
    postagens.push(novaPostagem);
    fs.writeFileSync(jsonPath,JSON.stringify(postagens,null,2));
    res.send(`Nova postagem adiconada com sucesso`);

})

// rota para entrar na página de usuário
// precisa testar se ta funcionando
router.get('homePage/:username', autenticarToken, (req, res) => {
    // Obtém o nome de usuário a partir do parâmetro de rota
    const { username } = req.params;

    // abre o banco de postagens
    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    // abre o banco de usuários
    const jsonPath2 = path.join(__dirname, '..', 'banco', 'data.json');
    const usuariosCadastrados = JSON.parse(fs.readFileSync(jsonPath2, { encoding: 'utf8', flag: 'r' }));

    // Busca as informações do usuário
    const user = usuariosCadastrados.find(user => user.username === username);

    // Verifica se o usuário existe
    if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
    }

    // Busca as postagens do usuário
    const userPosts = postagens.filter(post => post.username === username);

    // Ordena as postagens por data de criação em ordem decrescente
    userPosts.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

    // Envia as informações do usuário e suas postagens como resposta em formato JSON
    res.json({ user, posts: userPosts });

    // ambos valores de usuário e posts são arrays de objetos json, 
    // portanto deve ser tratado no front para mostrar a pagina do usuário
    // da forma que desejamos
});

// rota das tags
router.get('homePage/:tag', autenticarToken, (req, res) => {
    // recebe a tag como parametro da rota
    const { tag } = req.params;

    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    // filtra as postagens pela tag
    const postagensFiltradas = postagens.filter(post => post.tags.includes(tag));

    // ordena pelas mais recentes
    postagensFiltradas.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

    // devolve as postagens já filtradas
    res.json({ posts: taggedPosts });

})

// rota para adicionar like
router.post("homePage/like", autenticarToken, (req, res) => {
    const id = req.body.id;

    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    const post = postagens.find(post => post.id === id);
    post.likes += 1;

    fs.writeFileSync('postagens.json', JSON.stringify(data));
  
    res.json({ likes: post.likes });
})

// rota para adicionar comentário
router.post("homePage/comment", autenticarToken, (req, res) => {
    const id = req.body.id;
    const username = req.body.username;
    const commentText = req.body.commentText;

    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    const post = postagens.find(post => post.id === id);

    post.comments.push({ text: commentText, username });

    fs.writeFileSync('postagens.json', JSON.stringify(data));

    res.json({ comments: post.comments });
})

router.get('homePage/:search',autenticarToken, (req,res) =>{
    const { search } = req.params

    const jsonPath = path.join(__dirname, '..', 'banco', 'postagens.json');
    const postagens = JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8', flag: 'r' }));

    const postagensFiltradas = postagens.filter(post => post.texto.toLowerCase().includes(search.toLowerCase()));

    postagensFiltradas.sort((a, b) => new Date(b.dataCriacao) - new Date(a.dataCriacao));

    // devolve as postagens já filtradas
    res.json({ posts: taggedPosts });
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