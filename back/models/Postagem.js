class Postagem {
    // verificar como fazer para ter mais de uma tag, e adicionar imagem
    constructor(/*username*/ lugar, texto, tag, id, likes, comments){
        this.username = username;
        this.lugar = lugar;
        this.texto = texto;
        this.tag = tag;
        this.id = id;
        this.likes = likes;
        this.comments = comments || [];
        this.dataCriacao = new Date();
    }
}

module.exports = Postagem;