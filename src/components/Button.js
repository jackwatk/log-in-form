import React from 'react';

const Button = (props) => {
    return (
        <button onClick={props.moveContainer}>{props.children}</button>
    );
};

export default Button;