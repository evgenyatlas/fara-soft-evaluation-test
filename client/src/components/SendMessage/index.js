import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';
import chat from '../../modules/chat/chat';
import { Input } from '../Input';
import { SendBtn } from '../SendBtn';

import './SendMessage.css';

/**
 * SendMessage component
 * @param {string} className
 */
export function SendMessage({ className }) {
    const {
        register,
        handleSubmit,
        reset
    } = useForm();
    const onSubmit = ({ message }) => {
        chat.sendMessage(message);
        reset();
    };
    return (
        <form className={cn("SendMessage", className)} onSubmit={handleSubmit(onSubmit)}>
            <Input {...register('message')} className="SendMessage__Input" placeholder="Сообщение" />
            <SendBtn className="m5-left SendMessage__Send" />
        </form>
    );
}

SendMessage.propTypes = {
    className: PropTypes.string
};