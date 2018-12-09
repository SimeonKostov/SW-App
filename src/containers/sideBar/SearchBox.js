import React, {Component} from 'react';
import {connect} from 'react-redux';

import {onSearch, onStartRecording, onStopRecording} from '../actions';

const mapStateToProps=(state)=>{
    return{
        searchField: state.onSearch.searchField,
        isRecording: state.voiceRecording.isRecording,
        mediaRecorder: state.voiceRecording.mediaRecorder,
        audio: state.voiceRecording.audio
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearch: (event)=>onSearch(dispatch, event.target.value),
        onStartRecording: ()=>onStartRecording(dispatch),
        onStopRecording: (mediaRecorder, e)=>onStopRecording(dispatch, mediaRecorder, e)
    }
}

class SearchBox extends Component {
    render(){
        const {onSearch, onStartRecording, mediaRecorder, onStopRecording}=this.props;
        return(
            <div className='mt3 mb3 w-20'>
                <input type='search' onChange={onSearch}></input>
                <button onMouseDown={onStartRecording} onMouseUp={(e)=>onStopRecording(mediaRecorder, e)}>Hold</button>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);