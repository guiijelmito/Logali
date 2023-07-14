class Postagem {
    // verificar como fazer para ter mais de uma tag, e adicionar imagem
    constructor(name, description, id, likes, comments){
        this.name = name;
        this.description = description;
        this.id = id;
        this.likes = likes;
        this.comments = comments || [];
        this.dataCriacao = new Date();
    }
}

module.exports = Postagem;