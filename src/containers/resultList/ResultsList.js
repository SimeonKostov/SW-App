import React, {Component} from 'react';
import {connect} from 'react-redux';
import SWHero from '../../components/mainContent/SWHero';
import SWPlanet from '../../components/mainContent/SWPlanet';
import 'tachyons';

import {requestContent} from '../actions';

const mapStateToProps=(state)=>{
    return {
        isPending: state.isPending,
        type: state.type,
        content: state.content,
        error: state.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onRender: ()=>requestContent(dispatch, 'people')
    }
}

class ResultsList extends Component {

    componentDidMount(){
        this.props.onRender();
    }

    render(){
        const {isPending, content, type}=this.props;
        if(isPending){
            return(
                <div className='tc w-75'>
                    <h1 className='yellow'>Loading...</h1>
                </div>
            )
        }else{
            return(
                <div className='tc w-75'>
                    <h1 className='yellow'>{type.toUpperCase()}</h1>
                   {
                    (type === 'people' || type === 'planets') ?
                    content.map(el=>{
                        switch(type){
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsList);
