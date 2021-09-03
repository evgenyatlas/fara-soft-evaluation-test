import cn from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Input } from '../Input';
import { SendBtn } from '../SendBtn';

import './SendMessage.css';

/**
 * SendMessage component
 */
export function SendMessage({ className }) {
    return (
        <form className={cn("SendMessage", className)}>
            <Input className="SendMessage__Input" placeholder="Сообщение" />
            <SendBtn className="m5-left SendMessage__Send" />
        </form>
    );
}

SendMessage.propTypes = {
    className: PropTypes.string
};