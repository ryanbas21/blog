import { createStore, applyMiddleware, compose, combineReducers } from "redux";
const rootReducer = combineReducers({});
const middleware = [];
const enhancer = compose(applyMiddleware(...middleware), typeof window !== "undefined" && process.env.NODE_ENV !== "production"
    ? window.devToolsExtension && window.devToolsExtension()
    : (f) => f);
export default (initialState) => {
    const store = createStore(rootReducer, initialState, enhancer);
    return store;
};
