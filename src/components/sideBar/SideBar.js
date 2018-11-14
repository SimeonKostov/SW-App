import React,{Component} from 'react';
import SideBarOption from './SideBarOption';
import 'tachyons';

class SideBar extends Component{
    render(){
        return(
            <div className='w-25 pa3'>
                 {
                     this.props.options.map(option=>{
                         return <SideBarOption key={option} option={option} onContentChange={this.props.onContentChange}/>
                     })
                 }
            </div>
        )
    }
}

export default SideBar;
