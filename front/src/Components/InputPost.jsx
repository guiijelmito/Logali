import React, { useState } from 'react';
import InputForm from './InputForm';
import foto_perfil from '../imagens/foto_perfil.png'
import '../styles/InputPost.css';

// Botão para abrir o Pop-up
export default function PostEntry() {
  const [showInputForm, setShowInputForm] = useState(false);

  const handleMouseDown = () => {
    setShowInputForm(true);
  };

  const handleCloseForm = () => {
    setShowInputForm(false);
  };

  return (
    <>
      <div className='share'>
        <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil"/>

        {!showInputForm ? (
<<<<<<< Updated upstream
          <button className='button-post' onMouseDown={handleMouseDown}>
            <p className='p_btn_criarP'>
              Criar Publicação
            </p>
          </button>
=======
          <button className='button-post' onMouseDown={handleMouseDown}>Opine Aqui...</button>
>>>>>>> Stashed changes
        ) : (
          <InputForm onClose={handleCloseForm} />
        )}
      </div>
    </>
  );
}
