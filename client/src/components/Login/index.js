import React, { useState } from 'react'
import { LoginForm } from './LoginForm';
import { useStore } from 'effector-react';
import user from '../../features/user/user';

import './Login.css';
import chat from '../../features/chat/chat';

/**
 * Login component
 */
export function Login() {
    const logged = useStore(chat.logged.$store)
    return (
        !logged &&
        <div className="Login">
            <h1 className="Login__Title">Введите свое имя, что бы войти</h1>
            <LoginForm />
        </div>
    )
}