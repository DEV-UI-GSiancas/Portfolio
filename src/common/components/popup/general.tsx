import React, { ReactNode } from 'react';
import classNames from 'classnames';

import { PopupContext } from '../../../context/popup';
import { Button } from '../controls/button';

import './general.scss';

interface PopupProps {
    name: string;
    children: ReactNode;
}

export const Popup = ({name, children}: PopupProps) => {

    const _popupContxt = React.useContext(PopupContext);
    const currentActive = _popupContxt.currentActive;

    const handleHidePopup = () => {
        _popupContxt.setCurrentActive('');
    }

    return(
        <div
            className={classNames('popup-global' , {
                isActive: currentActive === name
            })} 
            onClick={handleHidePopup}
        >
            <div 
                className={'innerPopup'} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className='popup-header'>
                    <Button 
                        onClick={handleHidePopup}
                        className={'-close'}
                        label={'✕'}
                    />
                </div>
                <div className='popup-body'>
                    {children}
                </div>
            </div>
        </div>
    )
}