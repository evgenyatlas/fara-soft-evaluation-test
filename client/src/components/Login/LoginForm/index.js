import React from 'react';
import { Input } from '../../Input';
import { SendBtn } from '../../SendBtn';
import { useForm } from 'react-hook-form';
import chat from '../../../modules/chat/chat';


/**
 * LoginForm component
 */
export function LoginForm() {
    const {
        register,
        handleSubmit,
    } = useForm();
    const onSubmit = ({ loginName }) => chat.login(loginName);

    return (
        <form className="flex-align-center" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('loginName')} placeholder="Пример: Василий" required />
            <SendBtn className="m5-left" />
        </form>
    );
}