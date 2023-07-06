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
import Header from '../Components/Header'
import PostForm from './PostForm'

{/* Pendência: 
            Fazer o textarea aumentar de tamanho conforme o usuário escreve nele;
            Fazer o header sobrepor os outros elementos ;
            Fazer o Combobox das tags quando o usário clica no botão Tags*/}

// Componente que mostra o número de curtidas e permite que o usuário curta a postagem
function NumLikes(){
    const [likes, setLikes] = useState(0);

    const increment = () => {
        setLikes(likes + 1);
    }

    return(
        <>
            <button onClick={increment} id='coracao' className="btn_interage"> 
                <img src={icone_coracao} alt="Imagem de coração"/>
            </button>
            <p className='icones_post'> {likes} </p>  {/* Número de curtidas */}
        </>
    )
}

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

         <div className='container_post'>
            <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil"/>

            <p className='text_loc'> Bixo <strong>estava em</strong> Barzinho do chico </p> {/* Texto ao lado da foto de perfil do usuário que indica a localização */} 
            <p className="horas"> 2 horas atrás </p>

            <p className="texto_usuario"> Nunca vi uma lugar tão reconfortante e bom para beber e bater um papo com os cria. </p>

            <img id="post_foto" src={bar_chico} alt="Imagem postada pelo usuário"/>

            <div className='interagir'>

                <NumLikes />

                <button id='comentario' className="btn_interage"> <img src={icone_conversa} alt="Imagem de coração"/> </button> {/* Botão para comentar */}
                <p className='icones_post'> 13 </p>  {/* Número de comentários */}

                <img src={hashtag} alt="Imagem de tag"/>
                <p className='icones_post'> Barzinho </p>
            </div>

         </div>

        </>
    )
}