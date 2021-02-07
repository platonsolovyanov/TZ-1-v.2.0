import React from 'react'
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import LoginContainer from '../container/LoginContainer';


export default function LoginComponent() {

    const { register, handleSubmit } = useForm()


    const onSubmit = (data) => {
        if (data.login === "Admin" && data.password === "12345") {
            localStorage.setItem('validation', 'true');

        } else {
            alert('Введите логин пароль заново')
        }
    }

    return (
        localStorage.validation === "true" ? <Redirect to={'/profile'} /> : <LoginContainer register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} />

    )
}






