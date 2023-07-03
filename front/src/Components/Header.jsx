import '../Styles/Header.css'
import lupa from '../imagens/Icon.png'

export default function(){
    return(
    
        <header className ="search-container">
        <form action="search.csv">
        <input type="text" placeholder="Pesquisar..." name="search"/>
        <img src= {lupa}/>
        </form>
        </header>
        
    )

}