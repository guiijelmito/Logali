import { DevTool } from '@hookform/devtools';
import '../styles/CreateUser.css';
import {useForm} from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios, * as others from 'axios';
import { useState } from 'react';
import User from '../models/User';



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
            setMsg(response.data);
        } catch (error) {
            setMsg(error.response.data);
        }   
        
    }
  
    //para ver os erros no console a cada render
    //console.log('erro', errors);

    return (
        <>
        <div className='container'>
            <p className='logo'>Logáli</p>
            <form className='Register' onSubmit={handleSubmit(submit)} noValidate>
                <label className="Espaco" htmlFor="username" placeholder="usuário">Usuário</label>
                <input type="text" id="username" {...register('username')} />
                <p className='erro'>{errors.username?.message}</p>

                <label htmlFor="email" placeholder="email">Email</label>
                <input type="text" id="email" {...register('email')} />
                <p className='erro'>{errors.email?.message}</p>

                <label htmlFor="password">Senha</label>
                <input type="password" id="password" {...register('password')} />
                <p className='erro'>{errors.password?.message}</p>

                <label htmlFor="password">Confirmar Senha</label>
                <input type="password" id="passwordConf" {...register('passwordConf')} />
                <p className='erro'>{errors.passwordConf?.message}</p>

                <button className='Criar'>Criar Usuário</button>
            </form>
            <p className='logo'>Logáli</p>
        </div>
            <DevTool control={control}/>
            <p className='server-response'>{msg}</p>
        </>
    )

}