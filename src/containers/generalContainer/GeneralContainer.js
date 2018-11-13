import React,{Component} from 'react';
import options from './options';
import SideBar from '../../components/sideBar/SideBar';
import 'tachyons';
import './general.css';
import ResultsList from '../../components/mainContent/ResultsList';

class GeneralContainer extends Component{
    render(){
        return(
            <div className='flex flex-wrap'>
                <SideBar options={options}/>
                <ResultsList />
            </div>
        )
    }
}

export default GeneralContainer;
