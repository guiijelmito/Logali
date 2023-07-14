import React, { useState, useEffect } from 'react'

import foto_rep from '../imagens/foto_rep.png'
import foto_bar from '../imagens/foto_bar.png'
import foto_role from '../imagens/foto_role.png'
import foto_lazer from '../imagens/foto_lazer.png'
import foto_mercado from '../imagens/foto_mercado.png'

import api from '../interceptor/interceptor'

import '../styles/Feed.css'

import Post from './Post'
import PostForm from './PostForm'
import Header from '../Components/Header'
import PostList from '../Components/PostList'

export default function(){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        api.get('/homePage')
          .then(response => {
            setPosts(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, []);

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

         <PostForm /> {/* Componente onde o usuário fará suas postagens */}

         <PostList posts={posts} /> {/* Componente que mostra as postagens */}

        </>
    )
}