import React, { useState } from 'react'

import lupa from '../imagens/lupa.png'
import logo from '../imagens/logo.png'
import foto_perfil from '../imagens/foto_perfil.png'

import PostForm from './PostForm'
import '../Styles/Header.css'

export default function(){

    return(
        <div className='header'>
         <p className='logo'>Logali</p>

         <form action="search.csv" method="get" autoComplete="off" className='search'> {/* Formulário para a barra de pesquisa */}
          <img src={lupa} alt="Icone de lupa" />
          <input type="search" name="barra_busca" id="barra_busca" placeholder='Pesquisa ai curioso'/>

         </form>

         <PostForm /> {/* Componente onde o usuário fará suas postagens */}
         
         <button id='btn_perfil' type="button"> 
            <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil" />
         </button>
         
        </div>
        
    )
}