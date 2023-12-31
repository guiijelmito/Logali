import React, { useState } from 'react';

import '../styles/Comentario.css'

const Comentario = ({ onClose }) => {
  const [textoComentario, setTextoComentario] = useState('');

  const submit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/homePage/comment', data);
      sessionStorage.setItem('token', response.data);
      history.push('/homepage');
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    setTextoComentario(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(textoComentario);
    setTextoComentario('');
  };

  const handleClose = () => {
    onClose();
  };

  return (
  <>
    <div className='comentario-overlay'>
      <form className='comentario' onSubmit={handleSubmit}>
        <img className="icone_perfil" src="/src/imagens/foto_perfil.png" alt="Imagem do Perfil"/>
        <textarea
          className='campo_comentario'
          value={textoComentario}
          onChange={handleChange}
          placeholder="Digite seu comentário..."
        />
        <button className='send-button' type="submit">Enviar</button>
      </form>
      <button className="close-button" onClick={handleClose}>
      </button>
    </div>
  </>
  );
};

export default Comentario;
