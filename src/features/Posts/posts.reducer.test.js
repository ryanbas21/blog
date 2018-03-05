import { getPosts, submitPost } from "./posts.reducer";
test("Get Posts :: returns an action creator with getPosts type", () => {
    let expected = {
        type: "GET_POSTS"
    };
    let actual = getPosts();
    expect(actual).toEqual(expected);
});
test("Submit Post :: should return action object with POST", () => {
    let expected = {
        type: "SUBMIT_POST",
        payload: "file.txt"
    }, post = "file.txt", actual = submitPost(post);
    expect(actual).toEqual(expected);
});
