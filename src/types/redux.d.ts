import { RootState } from 'store';
import { POSTACTIONS, POSTTYPES } from '../features/Posts/posts.reducer';
import { PostState } from 'features/Posts';
export interface Action<T, P> {
	type: T;
	payload?: P;
}
type Actions = POSTACTIONS;
type Types = POSTTYPES;
type States = PostState;
export type Reducer<S, A> = (
	state: States,
	action: Action<Types, Actions>
) => RootState;
