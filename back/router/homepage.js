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

// precisa testar se ta funcionando
router.get('/:username', autenticarToken, (req, res) => {
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
router.get('/:tag', autenticarToken, (req, res) => {
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