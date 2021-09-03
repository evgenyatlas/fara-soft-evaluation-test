import React from 'react';
import { LoginForm } from './LoginForm';
import { useStore } from 'effector-react';

import './Login.css';
import chat from '../../modules/chat/chat';

/**
 * Login component
 */
export function Login() {
    const joined = useStore(chat.joined.$store);
    return (
        !joined &&
        <div className="Login">
            <h1 className="Login__Title">Введите свое имя, что бы войти</h1>
            <LoginForm />
        </div>
    );
}