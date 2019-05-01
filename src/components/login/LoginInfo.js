import React from 'react';
import Button from '../Button'
function LoginInfo(props) {
    return (
        <div className="login-info">
            <h2>{props.title}</h2>

            <Button moveContainer={props.moveContainer}>{props.type}</Button>
        </div>
    );

    }
export default LoginInfo;