import React from 'react';
import classNames from 'classnames';
import {Popup} from '../general';

import './index.scss';

const Location = React.memo(() => {

    const popupName = 'location-popup';

    console.log("popup location");

    return(
        <Popup name={popupName}>
            <div>
                <h1>Popup Location</h1>
            </div>
        </Popup>
    )
})

export default Location;