import React from 'react';
import 'tachyons';

const SWPlanet=({name, terrain, gravity, climate, population })=>{
    return(
        <div className='tc dib h5 pa2 pt4 mr2 mb2 br4-l grow bg-navy' style={{border: '2px solid #f1c40f'}}>
            {/* <img src={`https://robohash.org/${name}?size=150x150`} alt='avatar'></img> */}
            <h4 className='yellow'>{name}</h4>
            <p className='green'>terrain: {terrain}</p>
            <p className='orange'>gravity: {gravity}</p>
            <p className='pink'>climate: {climate}</p>
            <p className='gold'>population: {population}</p>
        </div>
    )
}

export default SWPlanet;