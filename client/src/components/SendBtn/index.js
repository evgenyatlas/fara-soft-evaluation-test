import React from 'react';
import { Btn } from "../Btn";
import PropTypes from 'prop-types';

/**
 * SendBtn component
 * @param {Function} onClick 
 */
export function SendBtn(props) {
    return (
        <Btn color="blue" type="submit" centerAlign {...props}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"></path></g></svg>
        </Btn>
    )
}

SendBtn.propTypes = {
    onClick: PropTypes.func,
}