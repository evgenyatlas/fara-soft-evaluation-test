import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './User.css';


/**
* Component for displaying a avatar from first two letters
* @param {string} props.nickname 
* @param {string} props.nickname 
* @param {boolean} props.color 
*/
export function User({ className, nickname, color }) {
    return (
        <div className={cn("User", className)} style={{ backgroundColor: color }}>
            {nickname.slice(0, 2)}
        </div>
    )
}

User.propTypes = {
    nickname: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
}