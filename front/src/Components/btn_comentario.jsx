import React, { useState } from 'react';
import '../styles/Feed.css';
import Comentario from './Comentario';
import icone_conversa from '../imagens/conversa.png'
import '../styles/Feed.css'

export default function PostEntry() {
  const [showComentForm, setShowComentForm] = useState(false);

  const handleMouseDown = () => {
    setShowComentForm(true);
  };

  const handleCloseForm = () => {
    setShowComentForm(false);
  };

  const ComentarioOverlay = () => {
    return (
      <div className="comentario-overlay">
        <Comentario onClose={handleCloseForm} />
      </div>
    );
  };

  return (
    <div>
      <form action="#" method="get">
        {!showComentForm ? (
          <button className='btn_comentario' onMouseDown={handleMouseDown}>
            <img src={icone_conversa} alt="Icone para aumentar a tela" />
          </button>
        ) : (
          <ComentarioOverlay />
        )}
      </form>
    </div>
  );
}
