import { RootState } from "store";
export interface Action {
	type: string;
	payload?: any;
}

type Reducer = (state: RootState, action: Action) => RootState;
