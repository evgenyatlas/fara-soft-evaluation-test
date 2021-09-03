import React, { useState } from 'react'
import { LoginForm } from './LoginForm';
import { useStore } from 'effector-react';
import user from '../../features/user/user';

import './Login.css';

/**
 * Login component
 */
export function Login() {
    const logged = useStore(user.logged.$store)
    return (
        logged ?
            null
            :
            <div className="Login">
                <h1 className="Login__Title">Введите свое имя, что бы войти</h1>
                <LoginForm />
            </div>
    )
}