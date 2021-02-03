import React from 'react'
import { useForm } from 'react-hook-form';
import { Redirect } from 'react-router-dom';

import LoginContainer from '../container/LoginContainer';
// import Profile from '../pages/Profile';

export default function Login() {
    const [sost, setSost] = React.useState(true)
    const { register, handleSubmit } = useForm()

    console.log(sost)

    const onSubmit = (data) => {
        if (data.login === "Admin" && data.password === "12345") {
            localStorage.setItem('validation', 'true');

        } else {
            alert('Введите логин пароль заново')
        }
    }

    return (
        localStorage.validation === "true" ? <LoginContainer register={register} handleSubmit={handleSubmit} onSubmit={onSubmit} /> : <Redirect to={'/profile'} />

    )
}






