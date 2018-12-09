import React,{Component} from 'react';
import SearchBox from '../../containers/sideBar/SearchBox';
import SideBarOption from '../../containers/sideBar/SideBarOption';
import 'tachyons';

class SideBar extends Component{
    render(){
        return(
            <div className='w-25 pa3'>
                <SearchBox />
                 {
                     this.props.options.map(option=>{
                         return <SideBarOption key={option} option={option}/>
                     })
                 }
            </div>
        )
    }
}

export default SideBar;
