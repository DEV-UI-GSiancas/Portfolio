import React from 'react';
import {Avatar} from '../avatar';
import {Link} from 'react-router-dom';
import './index.scss';

interface MessageProps{}

export const Message = (props: MessageProps) => {

    const reactions = [
        "😯😪😫😴😌🤓",
        "😩😬😰😱😳",
        "💋💋💋💋💋💋💋💋",
        "💋💋💋",
        "💘❤💓💔💕💖💗💙💚💛💜🖤💝💞",
        "🍑🍑🍑🍑🍑🍑🍑🍑🍑🍑",
    ]

    return (
        <div className='message'>
           <div className='message-header'>
                <Link to={'users/asda-43f3-f343r3-sd-r'}>
                    <b>Jessica Lopez</b>reacted with:
                </Link>
            </div>
            <div className='message-body'>
                <p>{reactions[Math.floor(Math.random() * 6)]}</p>
            </div>
        </div>
    )
}