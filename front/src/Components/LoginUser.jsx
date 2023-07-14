import { DevTool } from '@hookform/devtools';
import '../styles/LoginUser.css';
import {set, useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, * as others from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';


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
        <div className="body">
        <div className='container1'>
            <p className="logo">Logáli</p>
            <form  className='Login' onSubmit={handleSubmit(submit)} noValidate>

                <label className='nomelogar' htmlFor="email" placeholder="email">Email</label>
                <input className='logar' type="text" id="email" {...register('email')} />
                <p className='erro'>{errors.email?.message}</p>
                
                <label className='senhalogar' htmlFor="password">Senha</label>
                <input className='logar' type="password" id="password" {...register('password')} />
                <p className='erro'>{errors.password?.message}</p>

                <button className='Entrar'>Entrar</button>
            </form>
            <p className="logo">Logáli</p>
            </div>
            <DevTool control={control}/>
            <p className="server-response">{msg}</p>
            <div className="realizar-cadastro">
                Não possui conta? 
                <Link to="/CreateUser">Cadastro</Link>
            </div>    
        </div> 
        </>
    )

}