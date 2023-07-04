import '../Styles/Header.css'
import lupa from '../imagens/lupa.png'
import casa from '../imagens/casa.png'
import estrela from '../imagens/estrela.png'
import sino from '../imagens/sino.png'

export default function(){
    return(
        <header className='header'>
         <img className='logo' src="#" alt="Logo do Logali" />

         <form action="#" method="get" autocomplete="off">
            <input type="search" name="searchbar" id="i_search" />
            <button type="submit"> <img src={lupa} alt="Icone de lupa" /> </button>

         </form>

         <picture>
            <img src={casa} alt="Icone de Casa" />      {/*Home */}
            <img src={estrela} alt="Icone de rlala" />  {/*Favoritos*/}
            <img src={sino} alt="Icone de Sino" />      {/*Notificações*/}
         </picture>

         <button type="button"> <img class="img_perfil" src="#" alt="Imagem do Perfil" /> </button>
        </header>
    )
}