import { createStore, applyMiddleware, compose, combineReducers } from "redux";

type Reducers = any;
const rootReducer = combineReducers<Reducers>({});

declare global {
	interface Window {
		devToolsExtension: any;
	}
}

const middleware: ((a: any) => any)[] = [];
const enhancer = compose(
	applyMiddleware(...middleware),
	typeof window !== "undefined" && process.env.NODE_ENV !== "production"
		? window.devToolsExtension && window.devToolsExtension()
		: (f: any) => f
);

export interface Store {}
export default (initialState: Store) => {
	const store = createStore(rootReducer, initialState, enhancer);
	return store;
};
