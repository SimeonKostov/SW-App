import React, {Component} from 'react';
import {connect} from 'react-redux';
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
        onContentChange: (event)=>{
            console.log(event.target)
            return requestContent(dispatch, event.target.id);
        }
    }
}
class SideBarOption extends Component{
    render(){
        const {onContentChange, option}=this.props;
        return(
            <div className=''>
                <p className="option" id={option} onClick={onContentChange}>{option.toUpperCase()}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarOption);