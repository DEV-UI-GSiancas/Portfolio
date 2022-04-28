import React from 'react';
import style from './tag.module.css';

interface TagProps {
    label: string;
    type: string
}

export const Tag = (props: TagProps) => {
    return (
        <span className={style.tag}> 
            <span className={`${style.icon} ${props.type}`}/>
            <i className={style.txt}>{props.label}</i>
        </span>
    )
}