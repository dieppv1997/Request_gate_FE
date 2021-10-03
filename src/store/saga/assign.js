import { call, put, takeLatest } from "@redux-saga/core/effects";
import { apiGetAssign } from "../../services/apiCategory";
import { fetchAssignSuccess } from "../action/assign";
import * as type from "../type";

function* makeGetAssign(action) {
  try {
    const res = yield call(() => apiGetAssign());
    yield put(fetchAssignSuccess(res.data.assignee));
  } catch (error) {}
}

export default function* getAssign() {
  yield takeLatest(type.FETCH_ASSIGN, makeGetAssign);
}
