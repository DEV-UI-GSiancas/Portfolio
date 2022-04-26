import React from 'react';
import {Avatar} from '../avatar';
import {Link} from 'react-router-dom';
import './index.scss';

interface MessageProps{}

export const Message = (props: MessageProps) => {

    return (
        <div className='message'> 
           <div className='message-header'>
                <Link to={'users/asda-43f3-f343r3-sd-r'}>
                    <Avatar url='' className='--md'/>
                    <i>Jessica Lopez</i>
                </Link>
            </div>
            <div className='message-body'>
                😀😁😂🤣😃
            </div>
        </div>
    )
}