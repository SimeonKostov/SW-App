import React,{Component} from 'react';

class SideBarOption extends Component{
    render(){
        return(
           <div>
               <p className="option">{this.props.option.toUpperCase()}</p>
           </div>
        )
    }
}

export default SideBarOption;