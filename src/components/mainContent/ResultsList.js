import React from 'react';
import SWHero from './SWHero';
import SWPlanet from './SWPlanet';
import 'tachyons';

const ResultsList=({cont, contType})=>{
    if(!cont.length){
        return(
            <div className='tc w-75'>
                <h1 className='yellow'>Loading...</h1>
            </div>
        )
    }else{
        return(
            <div className='tc w-75'>
                <h1 className='yellow'>{contType.toUpperCase()}</h1>
               {
                (contType === 'people' || contType === 'planets') ?
                cont.map(el=>{
                    switch(contType){
                        case 'people':
                            return (
                                <SWHero key={el.name} name={el.name} by={el.birth_year}/>
                            );
                        case 'planets':
                            return (
                                <SWPlanet key={el.name} name={el.name} terrain={el.terrain} gravity={el.gravity} 
                                climate={el.climate} population={el.population}/>
                            );
                        default:
                            return null;
                    }
                })
                :
                <div>
                    <img src={'https://robohash.org/oops?set=set2&size=300x300'} alt='Oops..'></img>
                    <h2 className='white'>Oops... Something went wrong</h2>
                </div>  
               }
            </div>
        )
    }
}

export default ResultsList;
