import React from 'react';
import {Link} from 'react-router-dom';

// import {Button} from '../controls/button';
import {Message} from '../message';
// import {Avatar} from '../avatar';

// import {CardI} from '../../util/App.dto';
import {AppContext} from "../../../context/app";

// import reactions from '../../../json/reactions.json';
// import categories from '../../../json/categories.json';

import * as _ from 'lodash';
import './index.scss';

interface ChatProps{}

export const Chat = (props: ChatProps) => {

    // const _appContxt = React.useContext(AppContext);

    // const cardId: number = _appContxt.handleGetter('currentCardId');
    // const cards: CardI[] = _appContxt.handleGetter('cards');
 
    // const cardInfoId = cardId ? cardId : cards[0].photoId;
    // const cardInfo = _.find(cards , {photoId: cardInfoId}) as CardI;

    // const categoryId: string = cardInfo.category.toString();
    // const categoryLabel = categories.categories[categoryId as (keyof typeof categories.categories)];

    return (
        <div className={'chat'}> 
            <div className='block -top'>
                {/* <div className='d-flex --flx-center-between'>
                    <Link to={`/user/${cardInfo?.userId}`}>
                        <Avatar url={cardInfo.avatar} className={'--md'}/>
                        {cardInfo?.name}
                    </Link>

                    <div className='photo-overview'>
                        <p>{categoryLabel}</p>
                        <b>{cardInfo.ratings.toLocaleString()}</b>
                    </div>
                </div> */}
            </div>
            <div className='block -middle --scrollable'>
                {[1,2,3,4,5].map((i) => <Message key={i}/>)}
            </div>
            {/* <div className='block -bottom'>
                <div className='react-list --scrollable'>
                    {Object.keys(reactions).map((attr) => {
                        return (
                            <>
                                <h3>{attr}</h3>
                                {
                                    (reactions as any)[attr].map((reaction: any) => {
                                        return(
                                            <span style={{fontSize: '22px'}}>{reaction.emoji}</span>
                                        )
                                    })
                                }
                            </>
                        )
                    })}
                </div>
            </div> */}
        </div>
    )
}