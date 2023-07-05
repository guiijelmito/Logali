import "../styles/PostInput.css"

export default function PostInput(){
    return(
    <>
        <form action="./newPost" className='post_input'>
            <label for="conteudo">Conteúdo:</label>
            <input type="text" id="conteudo" name="conteudo"> </input>
            <label for="imagem">Imagem:</label>
            <input type="file" id="imagem" name="imagem"> </input>

            <label>Tags:</label>
            <input type="checkbox" id="rep" name="tags" value="#rep"> </input>
            <label for="rep">#rep</label>
            <input type="checkbox" id="bar" name="tags" value="#bar"> </input>
            <label for="bar">#bar</label>
            <input type="checkbox" id="mercado" name="tags" value="#mercado"> </input>
            <label for="mercado">#mercado</label>
            <input type="checkbox" id="lazer" name="tags" value="#lazer"> </input>
            <label for="lazer">#lazer</label>
            <input type="checkbox" id="festa" name="tags" value="#festa"> </input>
            <label for="festa">#festa</label>
        </form>
    </>
    )
}

// Verifique se o componente está sendo importado e usado corretamente. Certifique-se de que o nome do componente e o caminho do arquivo estão corretos e que o componente está sendo renderizado no lugar certo.
// Verifique se o componente está recebendo todas as props necessárias e se elas estão sendo passadas corretamente.
// Verifique se o código dentro do componente está correto e não está causando nenhum erro. Você pode tentar comentar partes do código para isolar o problema.
// Verifique se todas as dependências usadas pelo componente estão instaladas corretamente.