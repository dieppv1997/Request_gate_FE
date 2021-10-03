import * as types from "../type";

export const fetchComments = (data, callback) => {
  return { type: types.FETCH_COMMENT, payload: data, callback };
};
export const fetchCommentsSuccess = (data) => {
  return { type: types.FETCH_COMMENT_SUCCESS, payload: data };
};
export const fetchCommentsFailed = () => {
  return { type: types.FETCH_COMMENT_FAILED };
};

export const postComment = (data, callback) => {
  return { type: types.POST_COMMENT, payload: data, callback };
};
export const postCommentSuccess = (data) => {
  return { type: types.POST_COMMENT_SUCCESS, payload: data };
};
export const postCommentFailed = (error) => {
  return { type: types.POST_COMMENT_FAILED, payload: error };
};
export const refreshComment = () => {
  return { type: types.REFRESH_COMMENT };
};
