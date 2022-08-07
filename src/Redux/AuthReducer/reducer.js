import {
    USER_LOGIN_FAILURE,
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
} from "./actionTypes";

const initialState = {
    isAuth: false,
    isLoading: false,
    isError: false,
    token: "",
};

const authReducer = (oldState = initialState, { type, payload }) => {
    switch (type) {
        case USER_LOGIN_REQUEST:
            return {
                ...oldState,
                isLoading: true,
            };

        case USER_LOGIN_SUCCESS:
            return {
                ...oldState,
                isAuth: true,
                isLoading: false,
                token: payload,
            };

        case USER_LOGIN_FAILURE:
            return {
                ...oldState,
                isLoading: false,
                isError: true,
                isAuth: false,
                token: "",
            };

        default:
            return oldState;
    }
};

export { authReducer };
