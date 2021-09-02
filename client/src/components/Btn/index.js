import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './Btn.css';

/**
* Btn component
* @param {string} props.children - content
* @param {boolean} props.round - makes the button round
* @param {string} props.color
* @param {boolean} props.shadow
* @param {boolean} props.centerAlign - align content to center
* @param {boolean} props.className
* @param {func} props.onClick
* @param {text} props.type
*/
export function Btn({ className, centerAlign, shadow = true, children, onClick, round, color, ...props }) {
    return (
        <button
            onClick={onClick}
            className={
                cn(
                    "Btn",
                    {
                        'Btn_round': round,
                        [`Btn_color-${color}`]: color,
                        'Btn_center-align': centerAlign,
                        'Btn_shadow': shadow
                    },
                    className
                )
            }
            {...props}
        >
            {children}
        </button>
    )
}

Btn.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element, PropTypes.elementType]),
    round: PropTypes.bool,
    color: PropTypes.string,
    centerAlign: PropTypes.bool,
    className: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.string,
    shadow: PropTypes.bool
}