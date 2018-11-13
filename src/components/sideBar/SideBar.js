import React,{Component} from 'react';
import SideBarOption from './SideBarOption';
import 'tachyons';

class SideBar extends Component{
    render(){
        return(
            <div className='side-bar fl w-20 pa3'>
                 {
                     this.props.options.map(option=>{
                         return <SideBarOption option={option}/>
                     })
                 }
            </div>
        )
    }
}

export default SideBar;
