import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import Posts from "../features/Posts/posts.reducer";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "../root-epic";
const rootReducer = combineReducers({ Posts });
const epicMiddleware = createEpicMiddleware(rootEpic);
const enhancer = compose(
	applyMiddleware(epicMiddleware),
	process.env.NODE_ENV === "development" && typeof window !== "undefined"
		? window.__REDUX_DEVTOOLS_EXTENSION__ &&
		  window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f
);
export default (initialState) => {
	const store = createStore(rootReducer, initialState, enhancer);
	return store;
};
