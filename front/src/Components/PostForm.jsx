import React from 'react';

import icone_imagem from '../imagens/imagem.png';
import icone_video from '../imagens/video.png';
import icone_arroba from '../imagens/arroba.png';
import seta from '../imagens/seta.png';

import '../styles/PostForm.css';
import InputPost from './InputPost';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from 'react';
import { DevTool } from '@hookform/devtools';
import {set, useForm} from 'react-hook-form';

const schema = yup.object({
    lugar: yup.string().min(1,'Escreva o nome do lugar para publicar').required(),
    descricao: yup.string().min(1,'Escreva algo sobre o lugar').required(),
}).required();



export default function(){
    const [msg, setMsg] = useState(' ');

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const { control, handleSubmit, formState } = form;
    
    const submit = async (data) => {
        try {
            const response = await axios.post('http://localhost:3000/homePage/newPost', data);
            sessionStorage.setItem('token', response.data);
            history.push('/homepage');
        } catch (error) {
            console.log(error);
        }
    };
    
    return(
        <>
         <div className="container_share"> {/* Caixa onde o usuário faz suas postagens */}
            <InputPost/> {/* Botão que leva o usuário para o pop-up de criação de post */}

          
         </div>
        </>
    )
}

