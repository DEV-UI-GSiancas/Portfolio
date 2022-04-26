import React from 'react';
import { Link } from 'react-router-dom';
import {Avatar} from '../avatar';
import {Search} from '../search';

import './index.scss';

export const Footer = React.memo(() => {

    return (
        <footer className='footer'>

            <div className='groups'>
                <Link to={'/settings'}>
                    <Avatar url='' />
                </Link>
            </div>

            <div className='groups'>
                <Search />
                <Link to={'/'} className='logo' />
            </div>

        </footer>
    );
})