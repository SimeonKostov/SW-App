import {REQUEST_CONTENT_PENDING, REQUEST_CONTENT_SUCCESS, REQUEST_CONTENT_FAILED} from './constants';

const initialRobotsState={
    isPending: true,
    type: '',
    content: [],
    error: ''
}

export const requestContent=(state=initialRobotsState, action={})=>{
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