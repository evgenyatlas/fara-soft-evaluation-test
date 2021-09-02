import React from 'react';
import { Btn } from "../Btn";
import PropTypes from 'prop-types';

const copyCurrLink = () => navigator.clipboard.writeText(location.href)
/**
 * ShareBtn component
 * @param {Function} onClick 
 */
export function ShareLinkBtn(props) {
    return (
        <Btn onClick={copyCurrLink} type="submit" shadow={false} centerAlign {...props}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" height="20px" width="20px" xmlns="http://www.w3.org/2000/svg"><path fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40m160-64l-80-80-80 80m80 193V48"></path></svg>
        </Btn>
    )
}

ShareLinkBtn.propTypes = {
    onClick: PropTypes.func,
}