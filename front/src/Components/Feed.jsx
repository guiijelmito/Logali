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
                    <li> <img className='tags' src={foto_rep} alt="Imagem Reps" /> Reps</li> 
                    <li> <img className='tags' src={foto_bar} alt="Imagem Barzinho" /> Barzinho </li> 
                    <li> <img className='tags' src={foto_role} alt="Imagem Role" /> Rolezinho </li> 
                    <li> <img className='tags' src={foto_mercado} alt="Imagem Mercado" /> Mercado </li> 
                    <li> <img className='tags' src={foto_lazer} alt="Imagem Lazer" /> Lazer </li> 

                </ul>
            </menu> 
         </div>

        </>
    )
}