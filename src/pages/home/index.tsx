import React from "react";

import { AppContext } from "../../context/app";
import { PopupContext } from "../../context/popup";
import { Photo } from "../../common/components/photo";
import { Card } from "../../common/components/card";
import { Chat } from "../../common/components/chat";

// Controls
import { Filter } from "../../common/components/controls/filter";
import { Location } from "../../common/components/controls/location";

// APIs
import {getContestantsNearBy} from "../../common/apis/contestants";

// DTOs
import {CardI} from "../../common/util/App.dto";

// Styles
import "./index.scss";

export const Home = () => {

    const _appContxt = React.useContext(AppContext);
    const _popupContxt = React.useContext(PopupContext);

    const cards = _appContxt.handleGetter("cards");
    const isChatActive = _popupContxt.currentActive;

    React.useEffect(() => {
        if(!cards.length){
            getContestantsNearBy().then((users: any) => {
                _appContxt.handleSetter("cards", users);
            })
        }
    }, []); 

    return(
        <div className="page -home">

            <div className="col-wrap --vh">
                <div className="col --40">
                    <div className="inner-col">
                        <div className="controllers">
                            <div className="control-box">
                                <Location />
                            </div>
                            <div className="control-box">
                                <Filter />
                            </div>
                        </div>

                        <div className="list --vertical --scrollable">
                            {cards.map((card: CardI) => 
                                <Card 
                                    card={card}
                                    origin={'cards'}
                                    key={card.photoId}
                                />
                            )}
                        </div>
                    </div>
                </div>
                <div className="col --60">
                    <div className="inner-col">
                        <Photo />
                    </div>
                </div>
                <div className="col --30" hidden={isChatActive !== 'chat-popup'}>
                    <div className="inner-col">
                        <Chat />
                    </div>
                </div>
            </div>
        </div>
    )
}