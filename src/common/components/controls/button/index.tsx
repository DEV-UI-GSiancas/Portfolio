import React from 'react';
import './index.scss';

interface ButtonProps{
    label: string;
    className: string;

    onClick: () => void;
}

export const Button = (props: ButtonProps) => {
    return (
        <button 
            className={`btn ${props.className}`}
            onClick={props.onClick}
        >  
            {props.label}
        </button>    
    )
}