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

         <div className="container_share"> {/* Caixa onde o usuário faz suas postagens */}
            <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil"/>

            <form className='share' action="#" method="get"> 
                <textarea name="input_post" id="area_texto" placeholder="Opine aqui..."></textarea> 
                <InputPost/> {/* Botão que leva o usuário para o pop-up de criação de post */}

            </form>
                
            <hr />

            <menu>
                <ul className='lista_icones_share'>
                    <li id='post_imagem' > 
                        <button id="img_foto"> 
                            <img className='icones_share' src={icone_imagem} alt="Icone de Foto"/> <span className="text_share">Imagem</span>
                        </button>
                    </li>

                    <li id='post_video' > 
                        <button id="img_video" > 
                            <img className='icones_share' src={icone_video} alt="Icone de Camera"/> <span className="text_share">Vídeo</span>
                        </button>
                    </li>

                    <li id='mensionar' > 
                        <button id="img_mencao" > 
                            <img className='icones_share' src={icone_arroba} alt="Icone de Arroba"/> <span className="text_share">Mensão</span>
                        </button>
                    </li>
                </ul>

            </menu>

            <button className='btn_share' id="mostra_tags"> 
                Tag <img id='img_seta' src={seta} alt="Icone de uma seta" /> 
            </button>

            <button className='btn_share' id="publica"> Publicar </button>

         </div>

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