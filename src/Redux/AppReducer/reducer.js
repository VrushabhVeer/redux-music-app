import {
    GET_MUSIC_RECORD_FAILURE,
    GET_MUSIC_RECORD_REQUEST,
    GET_MUSIC_RECORD_SUCCESS,
} from "./actionTypes";

const initialState = {
    musicRecords: [],
    isLoading: false,
    isError: false,
};

const reducer = (oldState = initialState, { type, payload }) => {
    switch (type) {
        case GET_MUSIC_RECORD_REQUEST:
            return {
                ...oldState,
                isLoading: true,
                isError: false,
            };

        case GET_MUSIC_RECORD_SUCCESS:
            return {
                ...oldState,
                musicRecords: payload,
                isLoading: false,
                isError: false,
            };

        case GET_MUSIC_RECORD_FAILURE:
            return {
                ...oldState,
                isLoading: false,
                isError: true,
            };

        default:
            return oldState;
    }
};

export { reducer };
