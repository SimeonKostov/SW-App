import React from 'react';
import options from './options';
import SideBar from '../sideBar/SideBar';
import 'tachyons';
import './general.css';
import ResultsList from '../../containers/resultList/ResultsList';

const GeneralContainer=()=>{
    return(
        <div className='flex flex-wrap'>
            <SideBar options={options}/>
            <ResultsList/>
        </div>
    )
}

export default GeneralContainer;
