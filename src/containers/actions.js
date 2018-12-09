import {REQUEST_CONTENT_PENDING, 
        REQUEST_CONTENT_SUCCESS,
        REQUEST_CONTENT_FAILED, 
        CHANGE_SEARCH_FIELD,
        START_VOICE_RECORDING, 
        STOP_VOICE_RECORDING} from './constants';

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
    navigator.mediaDevices.getUserMedia({ audio: true })
    .then(stream => {
        const mediaRecorder = new MediaRecorder(stream);

        dispatch({type: START_VOICE_RECORDING, payload:{mediaRecorder: mediaRecorder}})
        mediaRecorder.start();

        const audioChunks = [];
        mediaRecorder.addEventListener("dataavailable", event => {
            audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener("stop", () => {
            const audioBlob = new Blob(audioChunks, {type: 'audio/ogg'});
            const form = new FormData();
            form.append('asdf', audioBlob);
            fetch('http://localhost:3001/transcript', {
                method: 'POST',
                body: form
              })
            .then(res=>res.json())
            .then(text=>console.log(text))
            .catch(err=>console.log(err));
        });
    });
}

export const onStopRecording=(dispatch, mediaRecorder)=>{
    mediaRecorder.stop();
    dispatch({type: STOP_VOICE_RECORDING});
}