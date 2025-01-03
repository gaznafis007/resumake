import React from 'react';

const Button = ({handler, params, children, type, style}) => {
    return (
        <button type={type} onClick={ params ? () => handler(params) : handler} className={style}>
            {children}
        </button>
    );
};

export default Button;