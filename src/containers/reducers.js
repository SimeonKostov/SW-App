import {REQUEST_CONTENT_PENDING, 
        REQUEST_CONTENT_SUCCESS, 
        REQUEST_CONTENT_FAILED, 
        CHANGE_SEARCH_FIELD, 
        START_VOICE_RECORDING, 
        STOP_VOICE_RECORDING} from './constants';

const initialContentState={
    isPending: true,
    type: '',
    content: [],
    error: ''
}

export const requestContent=(state=initialContentState, action={})=>{
    switch(action.type){
        case REQUEST_CONTENT_PENDING:
            return Object.assign({}, state, {isPending: true});
        case REQUEST_CONTENT_SUCCESS:
            return Object.assign({}, state, {isPending: false, type: action.payload.type, content: action.payload.content.results});
        case REQUEST_CONTENT_FAILED:
            return Object.assign({}, state, {isPending: false, error: action.payload});
        default:
            return state;
    }
}

const initialSearchState={
    searchField: ''
}

export const onSearch=(state=initialSearchState, action={})=>{
    switch(action.type){
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, {searchField: action.payload});
        default:
            return state;
    }
}

const initialRecordingState={
    isRecording: false,
    mediaRecorder: {},
    audio: {}
}

export const voiceRecording=(state=initialRecordingState, action={})=>{
    switch(action.type){
        case START_VOICE_RECORDING:
            return Object.assign({}, state, {isRecording: true, mediaRecorder: action.payload.mediaRecorder});
        case STOP_VOICE_RECORDING:
            return Object.assign({}, state, {isRecording: false})
        default: 
            return state;
    }
}