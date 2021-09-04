import React from 'react';
import PropTypes from "prop-types";
import { User } from '../User';
import { TimeUpdate } from './TimeUpdate';

import './Message.css';

/**
 * Message component
 * @param {string} text - message
 * @param {object} user - user object
 * @param {number} time
 * @param {string} float
 */
export function Message({ text, user, time, float = 'left' }) {
    return (
        <div className="Message">
            <User className="Message__Avatar" {...user} />
            <div className="Message__Content">
                {text}
                <div className="Message__Time">
                    <TimeUpdate time={time} />
                </div>
            </div>
        </div>
    );
}

Message.propTypes = {
    text: PropTypes.string.isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        color: PropTypes.string.isRequired
    }),
    time: PropTypes.number.isRequired,
    float: PropTypes.oneOf(['right', 'left'])
};