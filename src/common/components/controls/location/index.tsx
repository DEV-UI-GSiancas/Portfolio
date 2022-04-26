import React from 'react';
import LocationPopup from '../../popup/location';

import { PopupContext } from '../../../../context/popup';
import {UserAccountContext} from '../../../../context/user';

import './index.scss';

export const Location = () => {

    const popupContxt = React.useContext(PopupContext);
    const accountContxt = React.useContext(UserAccountContext);

    const handleTogglePopup = () => {
        popupContxt.setCurrentActive('location-popup');
    }

    return (
        <>
            <div className='location-btn-wrap'>
                <button 
                    className='btn -location' 
                    onClick={handleTogglePopup}
                />
                <span className='location-txt'>
                    <span className='you'>
                        You are here:
                    </span>
                    <span className='loc'>
                        {accountContxt.userAccount.location}
                    </span>
                </span>
            </div>
            <LocationPopup />
        </>
    )
}