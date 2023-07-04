import foto_rep from '../imagens/foto_rep.png'
import foto_bar from '../imagens/foto_bar.png'
import foto_role from '../imagens/foto_role.png'
import foto_lazer from '../imagens/foto_lazer.png'
import foto_mercado from '../imagens/foto_mercado.png'

import '../styles/Feed.css'
import Header from '../Components/Header'

export default function(){
    return(
        <>
         <Header />
         
         <div className='container_tags'>
            <h3>Lugares</h3>
            <menu>
                <ul className='lista_tags' >
                    <li id='tag_rep' > <img className='tags' src={foto_rep} alt="Imagem Reps" /> <span class='text'>Reps</span></li> 
                    <li id='tag_bar' > <img className='tags' src={foto_bar} alt="Imagem Barzinho" /> <span class='text'>Barzinho</span> </li> 
                    <li id='tag_role' > <img className='tags' src={foto_role} alt="Imagem Role" /> <span class='text'>Rolezinho</span> </li> 
                    <li id='tag_mercado' > <img className='tags' src={foto_mercado} alt="Imagem Mercado" /> <span class='text'>Mercado</span> </li> 
                    <li id='tag_lazer' > <img className='tags' src={foto_lazer} alt="Imagem Lazer" /> <span class='text'>Lazer</span> </li> 

                </ul>
            </menu> 
         </div>

        </>
    )
}