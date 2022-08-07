import {
    legacy_createStore,
    applyMiddleware,
    compose,
    combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { reducer as appReducer } from "./AppReducer/reducer";
import { authReducer } from "./AuthReducer/reducer";

const rootReducer = combineReducers({ appReducer, authReducer });

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export { store };
