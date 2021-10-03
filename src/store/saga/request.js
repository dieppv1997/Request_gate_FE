import { put, takeEvery, call, takeLatest } from "@redux-saga/core/effects";
import {
  addRequestSuccess,
  fetchRequestDetailSuccess,
  getListHistoryRequestSuccess,
  getRequestFail,
  getRequestSuccess,
} from "./../action/request";
import * as apiRequest from "../../services/apiRequest";
import * as types from "./../type";
import { STATUS_API } from "./../../constant";

function* reqGetRequest(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const res = yield call(() => apiRequest.getRequest(data));

    if (res.status === STATUS_API.SUCCESS) {
      yield put(getRequestSuccess(res.data));
      callbackSuccess();
    } else {
      yield put(getRequestFail());
      callbackFail();
    }
  } catch (e) {
    yield put(getRequestFail());
    callbackFail();
  }
}
export function* getRequest() {
  yield takeEvery(types.GET_REQUEST, reqGetRequest);
}

function* reqGetListHistoryRequest({ data }) {
  try {
    const res = yield call(() => apiRequest.getListHistoryRequest(data));

    if (res.status === STATUS_API.SUCCESS) {
      yield put(getListHistoryRequestSuccess(res.data));
    } else {
      yield put(getRequestFail());
    }
  } catch (e) {
    yield put(getRequestFail());
  }
}
export function* getHistoryRequest() {
  yield takeEvery(types.GET_LIST_HISTORY_REQUEST, reqGetListHistoryRequest);
}

function* makeAddRequest(action) {
  try {
    const res = yield call(() => apiRequest.apiAddRequest(action.payload));
    yield action.callbackSuccess();
    yield put(addRequestSuccess(res));
  } catch (e) {
    yield action.callbackFail(e.response.data);
  }
}
function* getRequestByIdFlow(action) {
  try {
    const res = yield call(() => apiRequest.getRequestById(action.payload));
    yield put(fetchRequestDetailSuccess(res));
  } catch (error) {}
}
export function* addRequest() {
  yield takeEvery(types.ADD_REQUEST, makeAddRequest);
  yield takeLatest(types.FETCH_REQUEST_DETAIL, getRequestByIdFlow);
}

function* updateRequestFlow(action) {
  try {
    yield call(() => apiRequest.apiUpdateRequest(action.payload));
    yield action.callbackSuccess("Update success", { variant: "success" });
  } catch (error) {
    if (error.response.data) {
      yield action.callbackFail(error.response.data);
    }
  }
}
export function* updateRequestWatcher() {
  yield takeEvery(types.UPDATE_REQUEST, updateRequestFlow);
}

function* deleteRequestFlow(action) {
  try {
    yield call(() => apiRequest.apiDeleteRequest(action.payload));
    yield action.callback("Request is deleted success !!!", {
      variant: "success",
    });
  } catch (error) {}
}
export function* deleteRequestWatcher() {
  yield takeLatest(types.DELETE_REQUEST, deleteRequestFlow);
}
