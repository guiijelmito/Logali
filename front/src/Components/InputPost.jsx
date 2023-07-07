import React, { useState } from 'react';
import InputForm from './InputForm';
import fullscreen from '../imagens/full.png';
import '../styles/InputPost.css';

export default function PostEntry() {
  const [showInputForm, setShowInputForm] = useState(false);

  const handleImageClick = () => {
    console.log("clicou");
    setShowInputForm(true);
  };

  const handleCloseForm = () => {
    setShowInputForm(false);
  };

  return (
    <div>
      <form className='share' action="#" method="get">
        {!showInputForm ? (
          <button className='button-post' onClick={handleImageClick}>
            <img src={fullscreen} alt="Icone para aumentar a tela" />
          </button>
        ) : (
          <InputForm onClose={handleCloseForm} />
        )}
      </form>
    </div>
  );
}
