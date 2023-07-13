import React from 'react';
import foto_perfil from '../imagens/foto_perfil.png';
import icone_imagem from '../imagens/imagem.png';
import icone_video from '../imagens/video.png';
import icone_arroba from '../imagens/arroba.png';
import seta from '../imagens/seta.png';
import '../styles/Feed.css';
import InputPost from './InputPost';

export default function(){
    return(
        <>
        <div className="container_share"> {/* Caixa onde o usuário faz suas postagens */}
            <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil"/>

            <form className='share' action="#" method="get"> 
                <InputPost/> {/* Botão que leva o usuário para o pop-up de criação de post */}
            </form>
         </div>
        </>
    )
}

