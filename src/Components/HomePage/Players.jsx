import React, { use } from 'react';
import AvailablePlayers from './AvailablePlayers';

const Players = ({playersPromise}) => {
    const data = use(playersPromise)
    console.log(data);
    return (
        <div className='container mx-auto'>
            {data.map(player => <AvailablePlayers player={player}></AvailablePlayers>)}
        </div>
    );
};

export default Players;