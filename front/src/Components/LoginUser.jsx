import { DevTool } from '@hookform/devtools';
import {set, useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, * as others from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

import '../styles/LoginUser.css';

const schema = yup.object({
    email: yup.string().email('Email inválido').required('Email obrigatório'),
    password: yup.string().min(2,'Senha com no mínimo 2 caracteres').required(),
}).required();


export default function LoginUser(){

    const [msg, setMsg] = useState(' ');

    const form = useForm({
        resolver: yupResolver(schema)
    });

    const { register, control, handleSubmit, formState } = form;

    const {errors} = formState;

    const submit = async (data) => {
        
        try {
            const response = await axios.post('http://localhost:3000/auth/login', data);
            sessionStorage.setItem('token', response.data);
            setMsg('Usuário Autenticado');
        } catch (error) {
            setMsg(error.response.data);
        }   
        
    }

    if(msg.includes('Usuário Autenticado')){
        return <Navigate to='/homePage' />
    }

    return (
        <>
            <div className='container'>
                <h1 className="logo">Logáli</h1>
                <form  className='Login' onSubmit={handleSubmit(submit)} noValidate>

                    <label htmlFor="email"><img src="imagens/conta-roxo-32.png" /></label>
                    <input type="email" name="email" id="email" required maxLength="35" placeholder=" Email" {...register('email')} />
                    <p className='erro'>{errors.email?.message}</p>
                    <hr id="line01" />
                    
                    <label className='senhalogar' htmlFor="password"><img src="imagens/chave-roxo-32.png" /></label>
                    <input type="password" name="senha" id="password" required minLength="2" maxLength="20" placeholder=" Senha (2-20)" {...register('password')} />
                    <p className='erro'>{errors.password?.message}</p>
                    <hr id="line02" />

                    <button type='submit' className='Entrar'>Entrar</button>
                </form>

                <Link to="/CreateUser"> <button id="cadastrar">Cadastrar</button> </Link>

            </div>

            {/* Linha que gera as divs que contem as bolas */}
            {Array(5).fill().map((_, i) => <div key={i} className='bolas' id={`bola${i}`}></div>)}

            <DevTool control={control}/>
            <p className="server-response">{msg}</p>

             
        </> 
    )

}