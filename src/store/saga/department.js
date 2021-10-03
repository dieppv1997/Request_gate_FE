import { call, put, takeLatest, delay } from "@redux-saga/core/effects";
import * as apiDepartment from "../../services/apiDepartment";
import { getDepartmentSuccess, getDepartmentFail } from "../action/department";
import {
  apiFilterDepartment,
  apiGetDepartment,
} from "../../services/apiDepartment";
import {
  fetchDepartmentsSuccess,
  filterDepartmentSuccess,
} from "../action/department";
import * as types from "../type";

function* makeGetDepartment() {
  try {
    const res = yield call(() => apiDepartment.getDepartment());
    yield put(getDepartmentSuccess(res.data.department));
  } catch (error) {
    yield put(getDepartmentFail());
  }
}
export function* getDepartment() {
  yield takeLatest(types.GET_DEPARTMENT, makeGetDepartment);
}

function* departmentFlow(action) {
  try {
    const res = yield call(() => apiGetDepartment(action.payload));
    yield put(fetchDepartmentsSuccess(res.data.department));
  } catch (error) {}
}
function* filterDepartmentFlow(action) {
  try {
    yield delay(300);
    const res = yield call(() => apiFilterDepartment(action.payload));
    yield put(filterDepartmentSuccess(res.data.department));
    yield action.callback();
  } catch (error) {}
}
function* createDepartmentFlow(action) {
  try {
    yield delay(400);
    yield call(() =>
      apiDepartment.apiCreateDepartment({ name: action.payload })
    );
    yield action.callback("Add department success!", {
      variant: "success",
    });
  } catch (error) {
    yield action.callback(error.response.data.message.name[0], {
      variant: "error",
    });
  }
}
function* editDepartmentFlow(action) {
  try {
    yield call(() => apiDepartment.apiUpdateDepartment(action.payload));
    yield action.callbackSuccess("Update department success!!!", {
      variant: "success",
    });
  } catch (error) {
    yield action.callbackFailed(error.response.data.message.name[0], {
      variant: "error",
    });
  }
}
export default function* departmentWatch() {
  yield takeLatest(types.FETCH_DEPARTMENT, departmentFlow);
  yield takeLatest(types.FILTER_DEPARTMENT, filterDepartmentFlow);
  yield takeLatest(types.CREATE_DEPARTMENT, createDepartmentFlow);
  yield takeLatest(types.EDIT_DEPARTMENT, editDepartmentFlow);
}
