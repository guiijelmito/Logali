import React, { useState } from 'react';
import foto_perfil from '../imagens/foto_perfil.png';
import icone_imagem from '../imagens/imagem.png';
import icone_video from '../imagens/video.png';
import icone_arroba from '../imagens/arroba.png';
import seta from '../imagens/seta.png';
import '../styles/Feed.css';
import InputPost from './InputPost';
import icone_coracao from '../imagens/coracao.png';
import bar_chico from '../imagens/bardochico.png';
import hashtag from '../imagens/hashtag.png';

import Comentario_btn from './btn_comentario';



function NumLikes() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false);

    const increment = () => {
        if (!liked) {
            setLikes(likes + 1);
        } else {
            setLikes(likes - 1);
        }
        setLiked(!liked);
    };

    return (
        <>
            <button onClick={increment} id='coracao' className="btn_interagir">
                <img src={icone_coracao} alt="Imagem de coração"/>
            </button>
            <p className='stats_post'> {likes} </p>  {/* Número de curtidas */}
        </>
    );
}

export default function (){
    return(
        <>

            <div className='container_post'>
                <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil"/>

                <p className='text_loc'> Bixo <strong>estava em</strong> Barzinho do chico </p> {/* Texto ao lado da foto de perfil do usuário que indica a localização */} 
                <p className="horas"> 2 horas atrás </p>

                <p className="texto_usuario"> Nunca vi uma lugar tão reconfortante e bom para beber e bater um papo com os cria. </p>

                <img id="post_foto" src={bar_chico} alt="Imagem postada pelo usuário"/>

                <div className='interagir'>

                    <NumLikes />

                    <Comentario_btn/> {/* Botão para comentar */}
                    <p className='stats_post'> 13 </p>  {/* Número de comentários */}

                    <img src={hashtag} alt="Imagem de tag"/>
                    <p className='stats_post'> Barzinho </p>
                </div>
            </div>

        </>
    )
}