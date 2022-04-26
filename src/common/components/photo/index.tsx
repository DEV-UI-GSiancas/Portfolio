import React from 'react';
import { AppContext } from '../../../context/app';
import { PopupContext } from '../../../context/popup';
import { CardI } from '../../util/App.dto';
import { Button } from '../controls/button';

import classNames from 'classnames';
import * as _ from 'lodash';
import './index.scss';

export const Photo = () => {
    const _appContxt = React.useContext(AppContext);
    const _popupContxt = React.useContext(PopupContext);

    const cards: CardI[] = _appContxt.handleGetter('cards');
    const cardId = _appContxt.handleGetter("currentCardId");

    const photo = cards.length ? (
        cardId !== '' ? 
            cards.filter((c: CardI) => 
                c.photoId === cardId
            )[0] : cards[0]
    ) : {} as CardI;

    const handlePhotoRating = (rating: number, pid: number) => {
        const curCardInd = _.findIndex(cards , {photoId: pid});
        cards[curCardInd].ratedByMe = rating;
        
        _appContxt.handleSetter("cards" , cards);
    }

    const handleNavigation = (nav: 'next' | 'prev') => {
        const curCardInd = _.findIndex(cards , {photoId: cardId});

        const index = curCardInd !== -1 ? curCardInd : 0;
        const limit = cards.length;


        if(nav === 'prev' && index > 0){
            _appContxt.handleSetter("currentCardId" , cards[index - 1].photoId);
        }

        if(nav === 'next' && index < limit){
            _appContxt.handleSetter("currentCardId" , cards[index + 1].photoId);
        }
    }

    const handlePhotoInfo = (pid: number) => {
        alert('see photo info ' + pid);
    }

    return (
        <div className='photo'> 
            <div className='photo-image'>
                {!photo?.photoUrl && <h1>Loading ...</h1>}
                {photo?.photoUrl && (
                    <>
                        <img src={photo.photoUrl} alt="main" />

                        <div 
                            className='photo-control -prev' 
                            onClick={() => {handleNavigation('prev')}}
                        />

                        <div 
                            className='photo-control -next' 
                            onClick={() => {handleNavigation('next')}}
                        />
                    </>
                )}
            </div>
            <div className='photo-info'>
                <Button 
                    className={classNames('btn -disagree', {'chosen': photo.ratedByMe === -1})} 
                    onClick={() => {handlePhotoRating(-1 , photo.photoId)}}
                    label={''}
                />

                <Button 
                    className={'btn -react'} 
                    onClick={() => {_popupContxt.setCurrentActive('chat-popup')}}
                    label={''}
                />

                <Button 
                    className={classNames('btn -agree', {'chosen': photo.ratedByMe === 1})} 
                    onClick={() => {handlePhotoRating(1 , photo.photoId)}}
                    label={''}
                />
            </div>
        </div>
    )
}