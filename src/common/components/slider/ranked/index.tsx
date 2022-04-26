import React from 'react';
import './index.scss';

interface RankedProps {
    url?: string;
}

export const Ranked = (props: RankedProps) => {
    const [contestants] = React.useState([
        1,2,3,4,5,6,7,8,9,10
    ]);

    return (
        <div className='ranked'> 
            <div className='title'>
                {/* <h2>Most Ranked</h2> */}
            </div>
            <div className='body'>
                {contestants.map(() => {
                    return (
                        <div className='ranked-user'>
                            <span className='avatar' />
                            <p className='name'>Nombre Aqui</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}