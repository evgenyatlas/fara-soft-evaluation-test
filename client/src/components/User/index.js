import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import './User.css';


/**
* Component for displaying a avatar from first two letters
* @param {string} props.className 
* @param {string} props.name 
* @param {boolean} props.color 
*/
export function User({ className, name, color }) {
    return (
        <div className={cn("User", className)} style={{ backgroundColor: color }}>
            {name.slice(0, 2)}
        </div>
    );
}

User.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
};