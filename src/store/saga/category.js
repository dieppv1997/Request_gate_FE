import { call, put, takeLatest, takeEvery } from "@redux-saga/core/effects";
import * as apiCategory from "../../services/apiCategory";
import {
  fetchCategorySuccess,
  addCategorySuccess,
  addCategoryFail,
  updateCategoryFail,
  updateCategorySuccess,
  fetchAllAssigneeSuccess,
  fetchAllAssigneeFail,
  fetchAllCategorySuccess,
  fetchAllCategoryFail,
} from "../action/category";
import * as types from "../type";
import { STATUS_API } from "./../../constant";

function* makeGetCat() {
  try {
    const res = yield call(() => apiCategory.apiGetCat());
    yield put(fetchCategorySuccess(res.category));
  } catch (error) {}
}

function* reqAddCategory(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const res = yield call(() => apiCategory.addCategory(data));
    if (res.status === STATUS_API.SUCCESS) {
      callbackSuccess();
      yield put(addCategorySuccess(res.data));
    } else {
      callbackFail();
      yield put(addCategoryFail());
    }
  } catch (e) {
    callbackFail();
    yield put(addCategoryFail());
  }
}

function* reqUpdateCategory(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const res = yield call(() => apiCategory.updateCategory(data));
    if (res.status === STATUS_API.SUCCESS) {
      callbackSuccess();
      yield put(updateCategorySuccess(data));
    } else {
      callbackFail();
      yield put(updateCategoryFail());
    }
  } catch (e) {
    callbackFail();
    yield put(updateCategoryFail());
  }
}

function* reqFetchAllCategory(action) {
  const { page, name } = action;
  try {
    const res = yield call(() => apiCategory.getCategory(page, name));
    if (res.status === STATUS_API.SUCCESS) {
      yield put(
        fetchAllCategorySuccess({
          allData: res.data.data,
          infoPage: res.data,
        })
      );
    } else {
      yield put(fetchAllCategoryFail());
    }
  } catch (e) {
    yield put(fetchAllCategoryFail());
  }
}

function* reqFetchAllAssignee(action) {
  try {
    const res = yield call(() => apiCategory.getAssignee());
    if (res.status === STATUS_API.SUCCESS) {
      yield put(fetchAllAssigneeSuccess(res.data.assignee));
    } else {
      yield put(fetchAllAssigneeFail());
    }
  } catch (e) {
    yield put(fetchAllAssigneeFail());
  }
}

export function* categoryWatch() {
  yield takeLatest(types.FETCH_CATEGORY, makeGetCat);
  yield takeEvery(types.ADD_CATEGORY, reqAddCategory);
  yield takeEvery(types.UPDATE_CATEGORY, reqUpdateCategory);
  yield takeEvery(types.FETCH_ALL_CATEGORY, reqFetchAllCategory);
  yield takeEvery(types.FETCH_ALL_ASSIGNEE, reqFetchAllAssignee);
}
