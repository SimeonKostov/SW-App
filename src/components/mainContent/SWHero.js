import React from 'react';
import 'tachyons';

const SWHero=()=>{
    return(
        <div className='tc outline w-25 pa3 mr2 mb2 br3-ns' style={{backgroundColor: '#111', border: '2px solid #f1c40f'}}>
            <img src='https://robohash.org/102.158.18.19?size=100x100' alt='avatar'></img>
            <h4 style={{color: 'white'}}>Name</h4>
            <p style={{color: 'white'}}>birth date</p>
        </div>
    )
}

export default SWHero;