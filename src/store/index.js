import { compose, createStore, applyMiddleware, combineReducers } from 'redux';
import Posts, {
	Posts as PostState,
	PostReducer
} from 'features/posts/posts.reducer';
import Current from 'features/post/post.reducer';
import { createEpicMiddleware } from 'redux-observable';
import rootEpic from '../root-epic';

export default (initialState) => {
	const epicMiddleware = createEpicMiddleware(rootEpic);
	const rootReducer = combineReducers({ Posts, Current });
	const devtools =
		process.env.NODE_ENV === 'development' && typeof window !== 'undefined'
			? window.__REDUX_DEVTOOLS_EXTENSION__ &&
			  window.__REDUX_DEVTOOLS_EXTENSION__()
			: (f) => f;
	const enhancer = compose(applyMiddleware(epicMiddleware), devtools);

	const store = createStore(rootReducer, initialState, enhancer);
	return store;
};
