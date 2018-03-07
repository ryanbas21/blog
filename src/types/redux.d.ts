import { RootState } from 'store';
import { POSTACTIONS, POSTTYPES } from '../features/Posts/posts.reducer';
export interface Action<T, P> {
	type: T;
	payload?: P;
}
type Actions = POSTACTIONS;
type Types = POSTTYPES;
export type Reducer<S, A> = (
	state: RootState,
	action: Action<Types, Actions>
) => RootState;
