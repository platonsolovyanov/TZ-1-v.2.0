import React from 'react';
import { Redirect } from 'react-router-dom';
import Portfile from '../components/ProfileComponent';




export default function Profile() {
    console.log(localStorage.validation)
    return (
        localStorage.validation === "true" && !undefined ? <Portfile /> : <Redirect to={'/login'} />
    )
}
