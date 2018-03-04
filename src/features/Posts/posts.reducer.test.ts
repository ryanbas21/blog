import { getPosts } from "./posts.reducer";

test("Get Posts :: returns an action creator with getPosts type", () => {
	let expected = {
		type: "GET_POSTS"
	};
	let actual = getPosts();

	expect(actual).toEqual(expected);
});
