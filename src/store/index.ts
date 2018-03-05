import { compose, createStore, applyMiddleware, combineReducers } from "redux";
import Posts, { Posts as PostState } from "../features/Posts/posts.reducer";
import { createEpicMiddleware } from "redux-observable";
import rootEpic from "../root-epic";

const rootReducer = combineReducers({ Posts });

declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION__: () => any;
	}
}
const epicMiddleware = createEpicMiddleware(rootEpic);

const enhancer = compose(
	applyMiddleware(epicMiddleware),
	process.env.NODE_ENV === "development" && typeof window !== "undefined"
		? window.__REDUX_DEVTOOLS_EXTENSION__ &&
		  window.__REDUX_DEVTOOLS_EXTENSION__()
		: (f) => f
);

export interface RootState extends PostState {}
export default (initialState: RootState) => {
	const store = createStore(rootReducer, initialState, enhancer);

	return store;
};
