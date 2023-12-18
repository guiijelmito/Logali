import { DevTool } from '@hookform/devtools';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, * as others from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Draggable from 'react-draggable';

import '../styles/CreateUser.css';

const schema = yup.object({
    username: yup.string().required('Usuário obrigatório'),
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().min(2,'Senha com no mínimo 2 caracteres').required(),
    passwordConf: yup.string().required('Confirme a senha').oneOf([yup.ref('password')], 'As senhas devem coincidir!'),
}).required();


export default function(){

    const [msg, setMsg] = useState();

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const { register, control, handleSubmit, formState } = form;

    const {errors} = formState;

    //const {name, ref, onChange, onBlur} =  register('username');

    const submit = async (data) => {
        
        try {
            const response = await axios.post('http://localhost:3000/auth/create', data);
            setMsg('Usuário Criado, volte para página de Login');
        } catch (error) {
            setMsg(error.response.data);
        }   
        
    }
  
    //para ver os erros no console a cada render
    //console.log('erro', errors);

    return (
        <>
            <div className='main_container'>
                <h1 className='logo'>Logáli</h1>
        
                <div className='content'>

                    <form onSubmit={handleSubmit(submit)} noValidate>

                        <label htmlFor="username"><img src="imagens/conta-roxo-32.png" alt="icone do perfil" /></label>
                        <input type="text" id="username" placeholder="Nome Completo"  {...register('username')} required/><br />
                        <p className='erro'>{errors.username?.message}</p>
                        <hr id="linha01" />

                        <label htmlFor="email"><img src="imagens/mensagem-roxo-30.png" alt="icone de envelope" /></label>
                        <input type="email" id="email" required maxlength="35" placeholder=" Email"  {...register('email')} /> <br />
                        <p className='erro'>{errors.email?.message}</p>
                        <hr id="linha02" />

                        <label htmlFor="password"><img src="imagens/desbloquear-roxo-32.png" alt="icone de senha" /></label>
                        <input type="password" id="password" required minlength="8" maxlength="20" placeholder=" Senha (8-20)" {...register('password')} /> <br />
                        <p className='erro'>{errors.password?.message}</p>
                        <hr id="linha03" />
                
                        <label htmlFor="passwordConf"><img src="imagens/cadeado-roxo-32.png" alt="icone de senha" /></label>
                        <input  type="password" id="passwordConf" required minlength="8" maxlength="20" placeholder="Confirmar Senha"  {...register('passwordConf')} /> <br />
                        <p className='erro'>{errors.passwordConf?.message}</p>
                        <hr id="linha04" />

                        <button type='submit' className='Criar'>Criar Usuário</button> 
                    </form>
                    <Link to="/"> <button id="voltar">Login</button> </Link>

                </div>
            </div>
            <DevTool control={control}/>
            <p className='server-response'>{msg}</p>

            {/* Linha que gera as divs que contem as bolas */}
                {Array(5).fill().map((_, i) => (
                    <Draggable key={i}>
                        <div className='bolas' id={`bola${i}`}></div>
                    </Draggable>
                ))}
        </>
    );
}