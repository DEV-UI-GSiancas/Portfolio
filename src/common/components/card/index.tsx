import React from 'react';

import {Avatar} from '../avatar';
import {Link} from 'react-router-dom';
import {CardI} from '../../util/App.dto';
import { AppContext } from "../../../context/app";
import { appContxtObj } from '../../../context/default/app';

import catgs from '../../../json/categories.json';

// styles
import './index.scss';

interface CardProps{
    origin: keyof typeof appContxtObj;
    card: CardI;
}

export const Card = ({card , origin}: CardProps) => {

    const _appContxt = React.useContext(AppContext);
    const appContxtObj = _appContxt.handleGetter('*');

    const cards = appContxtObj.cards;
    const cardId = appContxtObj.currentCardId;
    const pid = cards.length ? (cardId ? cardId : cards[0].photoId) : '';

    const setCurrentContastent = (id: number) => {
        const newAppContxtObj = {...appContxtObj};

        newAppContxtObj['currentCardId'] = id;
        newAppContxtObj['photoSrcOrigin'] = origin;
        
        _appContxt.handleSetter('*' , newAppContxtObj);
    }

    return (
        <div 
            className={`card ${pid === card.photoId ? '--active' : ''}`} 
            onClick={() => setCurrentContastent(card.photoId)}
        > 
            <div className='block -left'>
                <Avatar url={card.avatar} />
            </div>
            <div className='block -right'>
                <Link to={`/user/${card.userId}`} className={'link'}>
                    {card.name}
                </Link>
                <div className='info'>
                    <span className='location'>{card.location}</span>
                </div>
                <div className='info'>
                    <span className='category'>{(catgs.categories as any)[card.category]}</span>
                    <span className='rating'>{card.ratings.toLocaleString()}</span>
                </div>
            </div>
        </div>
    )
}