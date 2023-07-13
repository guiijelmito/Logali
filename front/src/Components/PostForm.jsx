import React from 'react';
import foto_perfil from '../imagens/foto_perfil.png';
import icone_imagem from '../imagens/imagem.png';
import icone_video from '../imagens/video.png';
import icone_arroba from '../imagens/arroba.png';
import seta from '../imagens/seta.png';
import '../styles/Feed.css';
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
            <img className="img_perfil" src={foto_perfil} alt="Imagem do Perfil"/>

            <form className='share' action="#" method="get"> 
                <InputPost/> {/* Botão que leva o usuário para o pop-up de criação de post */}
            </form>
                
            <hr />

            <menu>
                <ul className='lista_icones_share'>
                    <li id='post_imagem' > 
                        <button id="img_foto"> 
                            <img className='icones_share' src={icone_imagem} alt="Icone de Foto"/> <span className="text_share">Imagem</span>
                        </button>
                    </li>

                    <li id='post_video' > 
                        <button id="img_video" > 
                            <img className='icones_share' src={icone_video} alt="Icone de Camera"/> <span className="text_share">Vídeo</span>
                        </button>
                    </li>

                    <li id='mensionar' > 
                        <button id="img_mencao" > 
                            <img className='icones_share' src={icone_arroba} alt="Icone de Arroba"/> <span className="text_share">Mensão</span>
                        </button>
                    </li>
                </ul>

            </menu>

            <button className='btn_share' id="mostra_tags"> 
                Tag <img id='img_seta' src={seta} alt="Icone de uma seta" /> 
            </button>
            <button className='btn_share' type='submit' id="publica"> Publicar </button>

         </div>
        </>
    )
}

