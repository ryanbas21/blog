const GET_POSTS = "GET_POSTS";
export function getPosts() {
    return {
        type: GET_POSTS
    };
}
const SUBMIT_POST = "SUBMIT_POST";
export function submitPost(post) {
    return {
        type: SUBMIT_POST,
        payload: post
    };
}
