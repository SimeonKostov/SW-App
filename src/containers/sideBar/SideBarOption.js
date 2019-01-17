import React, {Component} from 'react';
import {connect} from 'react-redux';
import 'tachyons';

import {requestContent} from '../actions';

const mapStateToProps=(state)=>{
    return {
        isPending: state.requestContent.isPending,
        type: state.requestContent.type,
        content: state.requestContent.content,
        error: state.requestContent.error
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onContentChange: (event)=>requestContent(dispatch, event.target.id)
    }
}
class SideBarOption extends Component{
    render(){
        const {onContentChange, option}=this.props;
        return(
            <div className='w-50'>
                <p className="option" id={option} onClick={onContentChange}>{option.toUpperCase()}</p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBarOption);