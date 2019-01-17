import React, {Component} from 'react';
import {connect} from 'react-redux';

import {onSearch, onStartRecording, onStopRecording} from '../actions';

const mapStateToProps=(state)=>{
    return{
        searchField: state.onSearch.searchField,
        isRecording: state.voiceRecording.isRecording,
        stream: state.voiceRecording.stream,
        audio: state.voiceRecording.audio
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        onSearch: (event)=>onSearch(dispatch, event.target.value),
        onStartRecording: ()=>onStartRecording(dispatch),
        onStopRecording: (stream, e)=>onStopRecording(dispatch, stream, e)
    }
}

class SearchBox extends Component {
    render(){
        const {onSearch, onStartRecording, stream, onStopRecording}=this.props;
        return(
            <div className='mt3 mb3 w-20'>
                <input type='search' className='b--white b--solid br2 ba-l ph1 bg-black yellow' onChange={onSearch} placeholder="type a name"></input>
                
                {/* SpeechRecognition api don't work for now */}
                {/* <button onMouseDown={onStartRecording} onMouseUp={(e)=>onStopRecording(stream, e)}>Hold</button> */}
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);