import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import './Input.css';

/**
* Input component
* @param {string} props.defaultValue - value if the component it should be Uncontrolled
* @param {string} props.value
* @param {string} props.className
* @param {function} props.onChange
* @param {boolean} props.required
* @param {text} props.type 
* @param {text} props.placeholder 
*/
export const Input = forwardRef(function Input({ className, ...props }, ref) {
    return (
        <input className={cn("Input", className)} {...props} ref={ref} >
        </input>
    );
});


Input.propTypes = {
    defaultValue: PropTypes.string,
    value: PropTypes.string,
    className: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
    type: PropTypes.string,
    placeholder: PropTypes.string,
};