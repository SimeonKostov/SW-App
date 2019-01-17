import {REQUEST_CONTENT_PENDING, 
        REQUEST_CONTENT_SUCCESS,
        REQUEST_CONTENT_FAILED, 
        CHANGE_SEARCH_FIELD,
        START_VOICE_RECORDING, 
        STOP_VOICE_RECORDING} from './constants';
import recognizeMic from 'watson-speech/speech-to-text/recognize-microphone';

export const requestContent=(dispatch, type)=>{
    dispatch({type: REQUEST_CONTENT_PENDING});
    fetch(`https://swapi.co/api/${type}/?format=json`)
    .then(response=>response.json())
    .then(content=>dispatch({type: REQUEST_CONTENT_SUCCESS, payload:{type: type, content: content}}))
    .catch(err=>dispatch({type: REQUEST_CONTENT_FAILED, payload: err}));
}

export const onSearch=(dispatch, search)=>{
    dispatch({type: CHANGE_SEARCH_FIELD, payload: search});
}

export const onStartRecording=(dispatch)=>{
    fetch('http://localhost:3002/api/speech-to-text/token')
    .then(function(response) {
        return response.text();
    }).then(function (token) {
        var stream = recognizeMic({
            token: token, // use `access_token` as the parameter name if using an RC service
            objectMode: true, // send objects instead of text
            extractResults: true, // convert {results: [{alternatives:[...]}], result_index: 0} to {alternatives: [...], index: 0}
            format: false // optional - performs basic formatting on the results such as capitals an periods
        });

        stream.on('data', function(data) {
            console.log("asdf");
            console.log(data);
        });

        stream.on('error', function(err) {
            console.log(err);
        });
        //document.querySelector('#stop').onclick = stream.stop.bind(stream);
        dispatch({type: START_VOICE_RECORDING, payload:{stream: stream}});
    }).catch(function(error) {
        console.log(error);
    });
}

export const onStopRecording=(dispatch, stream)=>{
    stream.stop.bind(stream);
    dispatch({type: STOP_VOICE_RECORDING});
}

