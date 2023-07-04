class Postagem {
    // verificar como fazer para ter mais de uma tag, e adicionar imagem
    constructor(username, texto, tags){
        this.username = username;
        this.texto = texto;
        this.tags = tags;
        this.dataCriacao = new Date();
    }
}

module.exports = Postagem;