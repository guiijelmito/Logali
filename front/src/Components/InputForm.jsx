import React, { useState } from 'react';
import icone_imagem from '../imagens/imagem.png';
import icone_video from '../imagens/video.png';
import icone_arroba from '../imagens/arroba.png';
import "../styles/InputForm.css"

export default function InputForm({ onClose }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(true);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica para enviar o post
    // Por enquanto, apenas exibiremos os valores no console
    console.log('Nome:', name);
    console.log('Descrição:', description);
    // Limpa os campos
    setName('');
    setDescription('');
    // Fecha o formulário
    setIsFormOpen(false);
    onClose();
  };

  const handleClose = () => {
    // Limpa os campos
    setName('');
    setDescription('');
    // Fecha o formulário
    setIsFormOpen(false);
    onClose();
  };

  if (!isFormOpen) {
    return null; // Retorna null quando o formulário está fechado
  }
// Precisa alterar as fontes e talvez as cores
  return (
    <div className="input-form-overlay">
      <div className="input-form-container">
        <h1 className='titulo'>Criar Publicação</h1>
        <hr className='hr'></hr>
        <button className="close-button"onClick={handleClose}>X</button>

        <form className="form-post"onSubmit={handleSubmit}>
          <label className='titulo-input'htmlFor="name">Nome do Lugar</label>
          <input type="text" className="input-titulo" name="Nome do lugar" id="name" value={name} onChange={handleNameChange} />

          <textarea className='campo_input'name="Descrição" id="description" placeholder=' Conte para os outros sua experiência...' cols="30" rows="10" value={description} onChange={handleDescriptionChange}>
          </textarea>
          <div className='icones'>
            <button className='icones-button'><img className='icones-img' src={icone_imagem} alt="imagem" /></button>
            <button className='icones-button'><img className='icones-img' src={icone_video} alt="video" /></button>
            <button className='icones-button'><img className='icones-img' src={icone_arroba} alt="arroba" /></button>
          </div>

          <button className='send-button' type="submit">Publicar</button>
        </form>
        
      </div>
    </div>
  );
}
