import { RootState } from "store";
import { GETPOSTS, SUBMITPOST } from "../features/Posts/posts.reducer";
export interface Action<P> {
	type: string;
	payload?: P;
}
type Actions = GETPOSTS | SUBMITPOST;
export type Reducer<S, A> = (
	state: RootState,
	action: Action<Actions>
) => RootState;
