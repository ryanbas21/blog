import { combineEpics } from 'redux-observable';
import { PostEpic } from '../src/features/Posts/Posts.epic';
const rootEpic = combineEpics(PostEpic);
export default rootEpic;
