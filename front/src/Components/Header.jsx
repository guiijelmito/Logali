import lupa from '../imagens/lupa.png'
import casa from '../imagens/casa.png'
import sino from '../imagens/sino.png'
import logo from '../imagens/logo.png'
import estrela from '../imagens/estrela.png'
import foto_perfil from '../imagens/foto_perfil.png'
import Separation from '../imagens/Separation.svg'

import '../Styles/Header.css'

export default function(){

    return(
    <>
        <header className='header'>
         <img className='logo' src={logo} alt="Logo do Logali" />

         <form action="search.csv" method="get" autocomplete="off" className='search'> {/* Formulário para a barra de pesquisa */}
          <img src={lupa} alt="Icone de lupa" />
          <input type="search" name="barra_busca" id="barra_busca" placeholder='Pesquisa ai curioso'/>

         </form>

         <picture className='conteiner_ops'>    {/* Caixa da opções de navegação */}
            <img id='home' className='icone_op' src={casa} alt="Icone de Casa" />              {/*Home */}
            <img id='favoritar' className='icone_op' src={estrela} alt="Icone de estrela" />   {/*Favoritos*/}
            <img id='notificar' className='icone_op' src={sino} alt="Icone de Sino" />         {/*Notificações*/}
         </picture>

         <button id='btn_perfil' type="button"> 
            <img class="img_perfil" src={foto_perfil} alt="Imagem do Perfil" />
         </button>
         
        </header>
    </>
        
    )
}