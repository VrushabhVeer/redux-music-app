import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "./actionTypes";

import axios from "axios";

// const userLoginRequest = () => {
//     return {
//         type: USER_LOGIN_REQUEST,
//     };
// };

// const userLoginSuccess = (payload) => {
//     return {
//         type: USER_LOGIN_SUCCESS,
//         payload,
//     };
// };

// const userLoginFailure = () => {
//     return {
//         type: USER_LOGIN_FAILURE,
//     };
// };

// export { userLoginRequest, userLoginSuccess, userLoginFailure };

const login = (payload) => (dispatch) => {
    dispatch({ type: USER_LOGIN_REQUEST });

    return axios({
        method: "post",
        url: "/api/login",
        baseURL: "https://reqres.in",
        data: payload,
    })
        .then((res) => {
            dispatch({ type: USER_LOGIN_SUCCESS, payload: res.data.token });
        })
        .catch((err) => {
            dispatch({ type: USER_LOGIN_FAILURE });
        });
};

export { login };
