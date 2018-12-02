import {REQUEST_CONTENT_PENDING, REQUEST_CONTENT_SUCCESS, REQUEST_CONTENT_FAILED} from './constants';

export const requestContent=(dispatch, type)=>{
    dispatch({type: REQUEST_CONTENT_PENDING});
    fetch(`https://swapi.co/api/${type}/?format=json`)
    .then(response=>response.json())
    .then(content=>dispatch({type: REQUEST_CONTENT_SUCCESS, payload:{type: type, content: content}}))
    .catch(err=>dispatch({type: REQUEST_CONTENT_FAILED, payload: err}));
}