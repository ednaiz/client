import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import reducer from './index'
const initialState = {};

const middleware = [thunk];

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
);
export default store;