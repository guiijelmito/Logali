import React, { useState } from 'react'

import seta from '../imagens/seta.png'
import hashtag from '../imagens/hashtag.png'
import foto_rep from '../imagens/foto_rep.png'
import foto_bar from '../imagens/foto_bar.png'
import icone_video from '../imagens/video.png'
import bar_chico from '../imagens/bardochico.png'
import icone_arroba from '../imagens/arroba.png'
import foto_role from '../imagens/foto_role.png'
import icone_imagem from '../imagens/imagem.png'
import icone_coracao from '../imagens/coracao.png'
import foto_lazer from '../imagens/foto_lazer.png'
import icone_conversa from '../imagens/conversa.png'
import foto_perfil from '../imagens/foto_perfil.png'
import foto_mercado from '../imagens/foto_mercado.png'

import '../styles/Feed.css'
import Post from './Post'
import PostForm from './PostForm'
import InputPost from './InputPost';
import Header from '../Components/Header'
import Comentario_btn from './btn_comentario';
import Comentario from './Comentario';

{/* Pendência: 
            Precisa fazer o botão de comentário funcionar;
            Precisa separar o código do Post em um componente;
            Fazer o header sobrepor os outros elementos ;
            Fazer o Combobox das tags quando o usário clica no botão Tags*/}

// Componente que mostra o número de curtidas e permite que o usuário curta/descurta a postagem

export default function(){
    return(  
        <>
         <Header />
         
         <div className='container_tags'>
            <h3>Lugares</h3>
            <menu>
                <ul className='lista_tags' >
                    <li id='tag_rep' > 
                     <img className='tags' src={foto_rep} alt="Imagem Reps" /> <span className='text_tags'>Reps</span>
                    </li> 

                    <li id='tag_bar' > 
                     <img className='tags' src={foto_bar} alt="Imagem Barzinho" /> <span className='text_tags'>Barzinho</span>
                    </li> 

                    <li id='tag_role' > 
                     <img className='tags' src={foto_role} alt="Imagem Role" /> <span className='text_tags'>Rolezinho</span> 
                    </li> 

                    <li id='tag_mercado' >
                     <img className='tags' src={foto_mercado} alt="Imagem Mercado" /> <span className='text_tags'>Mercado</span>
                    </li> 
                    
                    <li id='tag_lazer' > 
                     <img className='tags' src={foto_lazer} alt="Imagem Lazer" /> <span className='text_tags'>Lazer</span>
                    </li> 

                </ul>
            </menu> 
         </div>

         <PostForm />

         <Post />

        </>
    )
}