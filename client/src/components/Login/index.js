import React from 'react';
import { LoginForm } from './LoginForm';
import { useJoined } from '../../modules/chat/hooks/useJoined';

import './Login.css';

/**
 * Login component
 */
export function Login() {
    const joined = useJoined();
    return (
        !joined &&
        <div className="Login">
            <h1 className="Login__Title">Введите свой никнейм, что бы войти</h1>
            <LoginForm />
        </div>
    );
}