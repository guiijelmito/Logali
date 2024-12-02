import React, { useState } from 'react';
import icone_coracao from '../imagens/coracao.png';
import hashtag from '../imagens/hashtag.png';

import '../styles/Post.css';
import Comentario_btn from './btn_comentario';

function NumLikes({ likes, onLike }) {
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    onLike(!liked);
    setLiked(!liked);
  };

  return (
    <>
      <button onClick={handleLike} id='coracao' className="btn_interagir">
        <img src={icone_coracao} alt="Imagem de coração" />
      </button>
      <p className='stats_post'> {likes} </p>  {/* Número de curtidas */}
    </>
  );
}

export default function Post({ post }) {
  const [likes, setLikes] = useState(post.likes);

  const handleLike = (liked) => {
    if (liked) {
      setLikes(likes + 1);
    } else {
      setLikes(likes - 1);
    }
  };

  return (
    <>
      <div className="list-posts">{/* wrap dos posts */}

        <div className='container_post'>{/* estrutura principal dos posts individuais */}

          <p className='text_loc'> <strong>Estava em</strong> {post.lugar} </p>
          <p className="horas"> {post.dataCriacao} </p>
          <p className="texto_usuario"> {post.texto} </p>

          <div className='interagir'>
            <NumLikes likes={likes} onLike={handleLike} /> {/* Botão para dar like no post */}
            <Comentario_btn /> {/* Botão para comentar */}
            <p className='stats_post'> {post.comentarios} </p>  {/* Número de comentários */}
            <img src={hashtag} alt="Imagem de tag" />
            <p className='stats_post'> {post.hashtag} </p>
          </div>
          
        </div>
      </div>

    </>
  )
}