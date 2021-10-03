import { call, put, takeLatest } from "@redux-saga/core/effects";

import { apiGetComments, apiPostComment } from "../../services/apiComment";
import { fetchCommentsSuccess, postCommentSuccess } from "../action/comment";
import * as types from "../type";

function* getCommentFlow(action) {
  try {
    const res = yield call(() => apiGetComments(action.payload));
    yield put(fetchCommentsSuccess(res));
  } catch (error) {}
}
function* postCommentFlow(action) {
  try {
    const res = yield call(() => apiPostComment(action.payload));
    yield put(postCommentSuccess(res.data[0]));
    yield action.callback("Comment success ", { variant: "success" });
  } catch (error) {
    yield action.callback("Có lỗi xảy ra", { variant: "error" });
  }
}
export default function* commentWatch() {
  yield takeLatest(types.FETCH_COMMENT, getCommentFlow);
  yield takeLatest(types.POST_COMMENT, postCommentFlow);
}
