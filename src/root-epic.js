import { combineEpics } from 'redux-observable';
import { postsEpic } from 'features/posts/posts.epic';
import { postEpic } from 'features/post/post.epic';

const rootEpic = combineEpics(postsEpic, postEpic);

export default rootEpic;
