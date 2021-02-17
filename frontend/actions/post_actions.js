import * as PostApiUtil from "../util/post_api_util";

export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post,
  };
};

export const removeComment = (postId) => {
  return {
    type: REMOVE_POST,
    postId,
  };
};

export const createPost = (post) => (dispatch) => {
  return PostApiUtil.createPost(post).then((post) =>
    dispatch(receivePost(post))
  );
};

export const updatePost = (post) => (dispatch) => {
  return PostApiUtil.updatePost(post).then((post) =>
    dispatch(receivePost(post))
  );
};

export const deletePost = (postId) => (dispatch) => {
  return PostApiUtil.deletePost(postId).then(() =>
    dispatch(removePost(postId))
  );
};