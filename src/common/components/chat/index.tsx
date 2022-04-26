import React from 'react';
import {Link} from 'react-router-dom';

import {Button} from '../controls/button';
import {Message} from '../message';

import {CardI} from '../../util/App.dto';
import {AppContext} from "../../../context/app";

import * as _ from 'lodash';
import reactions from '../../../json/reactions.json';
import './index.scss';

interface ChatProps{}

export const Chat = (props: ChatProps) => {

    const _appContxt = React.useContext(AppContext);

    const cardId: number = _appContxt.handleGetter('currentCardId');
    const cards: CardI[] = _appContxt.handleGetter('cards');
    const cardInfo = _.find(cards , {photoId: cardId});


    return (
        <div className={'chat'}> 
            <div className='block -top'>
                <div className='d-flex --flx-center-between'>
                    <Link to={`/user/${cardInfo?.userId}`}>
                        {cardInfo?.name}
                    </Link>

                    <Button 
                        onClick={() => {}}
                        className='-close --md'
                        label='✕'
                    />
                </div>
            </div>
            <div className='block -middle --scrollable'>
                {[1,1,1,1,1].map(() => <Message />)}
            </div>
            <div className='block -bottom'>
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
            </div>
        </div>
    )
}