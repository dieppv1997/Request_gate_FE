import { all } from "redux-saga/effects";
import getAssign from "./assign";
import { categoryWatch } from "./category";

import { userWatch } from "./user";
import {
  getRequest,
  addRequest,
  updateRequestWatcher,
  getHistoryRequest,
  deleteRequestWatcher,
} from "./request";
import departmentWatch, { getDepartment } from "./department";
import commentWatch from "./comment";
import { loginGoogle } from "../action/user";

export default function* rootSaga() {
  yield all([
    addRequest(),
    getAssign(),
    getRequest(),
    commentWatch(),
    updateRequestWatcher(),
    getDepartment(),
    departmentWatch(),
    getHistoryRequest(),
    userWatch(),
    categoryWatch(),
    loginGoogle(),
    deleteRequestWatcher(),
  ]);
}
