import React, { useState } from 'react'
import { Input } from '../../Input';
import { SendBtn } from '../../SendBtn';
import { useForm } from 'react-hook-form';
import login from '../../../features/user/user';
import chat from '../../../features/chat/chat';


/**
 * LoginForm component
 */
export function LoginForm() {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = ({ loginName }) => chat.join(loginName);
    return (
        <form className="flex-align-center" onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('loginName')} placeholder="Пример: Василий" required />
            <SendBtn className="m5-left" />
        </form>
    )
}