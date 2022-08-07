import axios from "axios";
import {
    GET_MUSIC_RECORD_FAILURE,
    GET_MUSIC_RECORD_REQUEST,
    GET_MUSIC_RECORD_SUCCESS,
    UPDATE_MUSIC_RECORD_FAILURE,
    UPDATE_MUSIC_RECORD_REQUEST,
    UPDATE_MUSIC_RECORD_SUCCESS,
} from "./actionTypes";


// const getMusicRequest = () => {
//     return {
//         type: GET_MUSIC_RECORD_REQUEST,
//     };
// };

// const getMusicSuccess = (payload) => {
//     return {
//         type: GET_MUSIC_RECORD_SUCCESS,
//         payload,
//     };
// };

// const getMusicFailure = () => {
//     return {
//         type: GET_MUSIC_RECORD_FAILURE,
//     };
// };

// export { getMusicRequest, getMusicSuccess, getMusicFailure }

const getMusicRequest = () => {
    return {
        type: GET_MUSIC_RECORD_REQUEST,
    }
}

const getMusicSuccess = (params) => (dispatch) => {
    dispatch(getMusicRequest());
    return axios.get("http://localhost:8080/albums", params)
        .then((res) => {
            return dispatch({
                type: GET_MUSIC_RECORD_SUCCESS,
                payload: res.data,
            })
        })
        .catch((err) => {
            return dispatch({
                type: GET_MUSIC_RECORD_FAILURE
            })
        })
}

const updateMusicRecord = (id, payload) => (dispatch)=>{
    dispatch({type:UPDATE_MUSIC_RECORD_REQUEST})
    return axios.patch(`http://localhost:8080/albums/${id}`,payload).then((res)=>{
        dispatch({type: UPDATE_MUSIC_RECORD_SUCCESS})
    })
    .catch((err)=>{
        dispatch({typ: UPDATE_MUSIC_RECORD_FAILURE})
    })
}

export { getMusicSuccess,updateMusicRecord }