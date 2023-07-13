import React, { useState } from 'react';
import InputForm from './InputForm';
import fullscreen from '../imagens/full.png';
import '../styles/InputPost.css';

export default function PostEntry() {
  const [showInputForm, setShowInputForm] = useState(false);

  const handleMouseDown = () => {
    setShowInputForm(true);
  };

  const handleCloseForm = () => {
    setShowInputForm(false);
  };

  return (
    <div>
      <form className='share' action="#" method="get">
        {!showInputForm ? (
          <button className='button-post' onMouseDown={handleMouseDown}>
            <p className='p_btn_criarP'>
              Criar Publicação
            </p>
          </button>
        ) : (
          <InputForm onClose={handleCloseForm} />
        )}
      </form>
    </div>
  );
}
