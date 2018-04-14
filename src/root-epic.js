import { combineEpics } from 'redux-observable';
import { postEpic } from 'features/posts/posts.epic';

const rootEpic = combineEpics(postEpic);

export default rootEpic;
