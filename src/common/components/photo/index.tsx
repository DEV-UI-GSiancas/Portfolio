import React from 'react';
import { AppContext } from '../../../context/app';
import { CardI } from '../../util/App.dto';
import { Button } from '../controls/button';
import { Tag } from '../tag';

import categories from '../../../json/categories.json';
import * as _ from 'lodash';
import './index.scss';

export const Photo = () => {
    const _appContxt = React.useContext(AppContext);

    const cards: CardI[] = _appContxt.handleGetter('cards');
    const cardId = _appContxt.handleGetter("currentCardId");

    const buttons = [1,2,3,4,5,6,7,8,9,10];

    const photo = cards.length ? (
        cardId !== '' ? 
            cards.filter((c: CardI) => 
                c.photoId === cardId
            )[0] : cards[0]
    ) : {} as CardI;

    const categoryId: string = photo?.category ? photo.category.toString() : "";
    const categoryLabel = categories.categories[categoryId as (keyof typeof categories.categories)];

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

    return (
        <div className='photo'> 
            <div className='photo-image'>
                {!photo?.photoUrl && <h1>Loading ...</h1>}
                {photo?.photoUrl && (
                    <>
                        <div 
                            className='photo-display'
                            style={{backgroundImage: `url(${photo.photoUrl})`}} 
                        >
                            <div className='photo-tags'>
                                <Tag label={photo.ratings.toLocaleString()} type={'rating'} />
                                <Tag label={categoryLabel} type={'category'} />
                            </div>
                        </div>

                        <div 
                            className='photo-navigation -prev' 
                            onClick={() => {handleNavigation('prev')}}
                        />

                        <div 
                            className='photo-navigation -next' 
                            onClick={() => {handleNavigation('next')}}
                        />
                    </>
                )}
            </div>
            <div className='photo-control'>
                <span 
                    onClick={() => {handlePhotoRating(1 , photo.photoId)}}
                    className='sider -disagree'
                />
                <div className='rating-bar'>
                    {buttons.map((i) => {
                        return (
                            <Button 
                                className={'rating'} 
                                onClick={() => {handlePhotoRating(i , photo.photoId)}}
                                label={''}
                                key={i}
                            />
                        )
                    })}
                    <span className={'bar'} style={{width: `${photo.ratedByMe}0%`}}/>
                </div>
                <span 
                    onClick={() => {handlePhotoRating(buttons.length , photo.photoId)}}
                    className='sider -agree'
                />
            </div>
        </div>
    )
}