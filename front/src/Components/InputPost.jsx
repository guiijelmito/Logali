import React, { useState } from 'react';
import InputForm from './InputForm';
import icone_imagem from '../imagens/imagem.png';
import icone_video from '../imagens/video.png';
import icone_arroba from '../imagens/arroba.png';
import seta from '../imagens/seta.png';

import foto_perfil from '../imagens/foto_perfil.png'
import '../styles/InputPost.css';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object({
  name: yup.string().min(1, 'Escreva o nome do lugar para publicar').required(),
  description: yup.string().min(1, 'Escreva algo sobre o lugar').required(),
}).required();

export default function PostEntry() {
  const [showInputForm, setShowInputForm] = useState(false);

  const handleMouseDown = () => {
    setShowInputForm(true);
  };

  const handleCloseForm = () => {
    setShowInputForm(false);
  };

  const handleClose = () => {
    setShowInputForm(false);
  };

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('http://localhost:3000/homePage/newPost', data);
      sessionStorage.setItem('token', response.data);
      history.push('/homepage');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className='share'>
        <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil" />

        {!showInputForm ? (
          <button className='button-post' onMouseDown={handleMouseDown}>Opine Aqui...</button>
        ) : (
          <div className="input-form-overlay">
            <div className="input-form-container">
              <h1 className='titulo'>Criar Publicação</h1>
              <hr className='hr'></hr>
              <button className="close-button" onClick={handleClose}>X</button>

              <form className="form-post" onSubmit={handleSubmit(onSubmit)}>
                <label className='titulo-input' htmlFor="name">Nome do Lugar</label>
                <input type="text" className="input-titulo" name="Nome do lugar" id="name" {...register('name')} />
                <p>{errors.name?.message}</p>

                <textarea className='campo_input' name="Descrição" id="description" placeholder=' Conte para os outros sua experiência...' cols="30" rows="10" {...register('description')}>
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
        )}
      </div>
    </>
  );
}
