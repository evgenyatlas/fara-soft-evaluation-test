import React from 'react';
import { Input } from '../../Input';
import { SendBtn } from '../../SendBtn';
import { useForm } from 'react-hook-form';
import chat from '../../../modules/chat/chat';


/**
 * LoginForm component (Auth)
 */
export function LoginForm() {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = ({ userName }) => {
        chat.userName.set(userName);
        chat.login();
    };

    return (
        <form className="flex-align-center" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('userName')} placeholder="Пример: Evgeny" required />
            <SendBtn className="m5-left" />
        </form>
    );
}