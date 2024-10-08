// Button.js
import React from 'react';

function Button(props) {
    return (
        <button onClick={props.onClick} id={props.id}>
            {props.children}
        </button>
    );
}

export default Button;
