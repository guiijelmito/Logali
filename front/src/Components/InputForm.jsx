import React, { useState } from 'react';
import icone_imagem from '../imagens/imagem.png';
import icone_video from '../imagens/video.png';
import icone_arroba from '../imagens/arroba.png';

import "../styles/InputForm.css"
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {set, useForm} from 'react-hook-form';

const schema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
});

export default function InputForm({ onClose }) {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  //const [name, setName] = useState('');
  //const [description, setDescription] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(true);

  const onSubmit = (data) => {
    // Enviar o post para o back-end
    axios.post('/homePage/newPost', data)
      .then((response) => {
        console.log('Post enviado com sucesso:', response.data);
      })
      .catch((error) => {
        console.error('Erro ao enviar o post:', error);
      });
    // Limpa os campos
    reset();
    // Fecha o formulário
    setIsFormOpen(false);
    onClose();
  };

  const handleClose = () => {
    // Limpa os campos
    reset();
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

        <form className="form-post" onSubmit={handleSubmit(onSubmit)}>
          <label className='titulo-input' htmlFor="name">Nome do Lugar</label>
          <input type="text" className="input-titulo" name="Nome do lugar" id="name" {...register('name')} />
          <p>{errors.name?.message}</p>
          
          <textarea className='campo_input'name="Descrição" id="description" placeholder=' Conte para os outros sua experiência...' cols="30" rows="10" {...register('description')}>
          </textarea>
          <p>{errors.description?.message}</p>

          <div className='icones'>
            <button className='icones-button'><img className='icones-img' src={icone_imagem} alt="imagem" /></button>
            <button className='icones-button'><img className='icones-img' src={icone_video} alt="video" /></button>
            <button className='icones-button'><img className='icones-img' src={icone_arroba} alt="arroba" /></button>
          </div>

          <button className='send-button'>Publicar</button>
        </form>
        
      </div>
    </div>
  );
}
