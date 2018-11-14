import React from 'react';
import 'tachyons';

const SWHero=({name, by})=>{
    return(
        <div className='tc dib w-20 h5 pa2 mr2 mb2 br4-l grow bg-black' style={{border: '2px solid #f1c40f'}}>
            <img src={`https://robohash.org/${name}?size=150x150`} alt='avatar'></img>
            <h4 style={{color: 'white'}}>{name}</h4>
            <p style={{color: 'white'}}>{by}</p>
        </div>
    )
}

export default SWHero;