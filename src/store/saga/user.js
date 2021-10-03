import {
  put,
  takeEvery,
  call,
  takeLatest,
  delay,
  select,
} from "@redux-saga/core/effects";
import {
  loginSuccess,
  loginFail,
  filterUserSuccess,
  filterUserFail,
  addUserSuccess,
  addUserFail,
  updateUserSuccess,
  updateUserFail,
} from "./../action/user";
import * as apiUser from "../../services/apiUser";
import * as types from "./../type";
import { TYPE_GET_DATA_USER, STATUS_API } from "./../../constant";

function* reqLoginGoogle(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const resLoginGoogle = yield call(() => apiUser.loginGoogle(data));
    if (
      resLoginGoogle.status === STATUS_API.SUCCESS &&
      resLoginGoogle.data.access_token
    ) {
      yield localStorage.setItem(
        "access_token",
        resLoginGoogle.data.access_token
      );
      yield localStorage.setItem("token_type", resLoginGoogle.data.token_type);
      const resProfile = yield call(() => apiUser.getMe());
      callbackSuccess(resLoginGoogle.data);
      yield put(loginSuccess(resProfile.data));
    }
    if (
      resLoginGoogle.status === STATUS_API.SUCCESS &&
      resLoginGoogle.data.message === "User not found !"
    ) {
      callbackFail(resLoginGoogle.data.data);
      yield put(loginFail());
    } else {
      callbackFail();
      yield put(loginFail());
    }
  } catch (e) {
    callbackFail();
    yield put(loginFail());
  }
}

function* reqRegisterByGoogle(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const res = yield call(() => apiUser.registerByGoogle(data));
    if (res.status === STATUS_API.SUCCESS) {
      callbackSuccess(res.data);
      yield put(loginSuccess(res.data));
    } else {
      callbackFail();
      yield put(loginFail);
    }
  } catch (e) {
    callbackFail();
    yield put(loginFail());
  }
}

function* reqLogin(action) {
  const { data, callbackSuccess, callbackFail } = action.payload;
  try {
    const res = yield call(() => apiUser.login(data));
    if (res.status === STATUS_API.SUCCESS) {
      callbackSuccess(res.data);
      yield put(loginSuccess(res.data));
    } else {
      callbackFail();
      yield put(loginFail);
    }
  } catch (e) {
    callbackFail();
    yield put(loginFail());
  }
}

function* reqGetMe(action) {
  try {
    const res = yield call(() => apiUser.getMe());
    if (res.status === STATUS_API.SUCCESS) {
      yield put(loginSuccess(res.data));
    } else {
      yield put(loginFail);
    }
  } catch (e) {
    yield put(loginFail());
  }
}

function* reqFilterUser(action) {
  const { data, callbackSuccess, callbackFail, typeGetData } = action;

  yield delay(500);
  try {
    const res = yield call(() => apiUser.filterUser(data));
    if (res.status === STATUS_API.SUCCESS) {
      callbackSuccess();
      let infoPage = { ...res.data };
      delete infoPage.data;
      let data = res.data.data;

      if (typeGetData === TYPE_GET_DATA_USER.GET_MORE) {
        const allDataUserInStore = yield select(
          (state) => state.dataUser.allData
        );
        data = data.concat(allDataUserInStore);
      }
      yield put(
        filterUserSuccess({
          allData: data,
          infoPage,
        })
      );
    } else {
      callbackFail();
      yield put(filterUserFail);
    }
  } catch (e) {
    callbackFail();
    yield put(filterUserFail());
  }
}

function* reqGetMoreFilterUser(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const res = yield call(() => apiUser.filterUser(data));
    if (res.status === STATUS_API.SUCCESS) {
      callbackSuccess();
      let infoPage = { ...res.data };
      delete infoPage.data;

      yield put(
        filterUserSuccess({
          allData: res.data.data,
          infoPage,
        })
      );
    } else {
      callbackFail();
      yield put(filterUserFail);
    }
  } catch (e) {
    callbackFail();
    yield put(filterUserFail());
  }
}

function* reqAddUser(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const res = yield call(() => apiUser.addUser(data));
    if (res.status === STATUS_API.SUCCESS) {
      const allDataDepartmentInStore = yield select(
        (state) => state.dataDepartment.allData
      );
      callbackSuccess();
      yield put(
        addUserSuccess({
          ...res.data,
          department: allDataDepartmentInStore.find(
            (e) => parseInt(e.id) === parseInt(data.department_id)
          ),
        })
      );
    } else {
      callbackFail(null, {
        email: res?.data?.message?.email,
        maNv: res?.data?.message?.employee_id,
        name: res?.data?.message?.name,
        department: res?.data?.message?.department,
        role: res?.data?.message?.role,
        status: res?.data?.message?.status,
      });
      yield put(addUserFail());
    }
  } catch (e) {
    callbackFail();
    yield put(addUserFail());
  }
}

function* reqUpdateUser(action) {
  const { data, callbackSuccess, callbackFail } = action;
  try {
    const res = yield call(() => apiUser.updateUser(data));
    if (res.status === STATUS_API.SUCCESS && !res.data.code) {
      const allDataDepartmentInStore = yield select(
        (state) => state.dataDepartment.allData
      );
      callbackSuccess();
      yield put(
        updateUserSuccess({
          ...res.data,
          department: allDataDepartmentInStore.find(
            (e) => parseInt(e.id) === parseInt(data.department_id)
          ),
        })
      );
    } else {
      callbackFail(
        typeof res?.data?.message === "string" ? res?.data?.message : null,
        {
          email: res?.data?.message?.email,
          maNv: res?.data?.message?.employee_id,
          name: res?.data?.message?.name,
          department: res?.data?.message?.department,
          role: res?.data?.message?.role,
          status: res?.data?.message?.status,
        }
      );
      yield put(updateUserFail());
    }
  } catch (e) {
    callbackFail();
    yield put(updateUserFail());
  }
}

export function* userWatch() {
  yield takeEvery(types.LOGIN_GOOGLE, reqLoginGoogle);
  yield takeEvery(types.REGISTER_GOOGLE, reqRegisterByGoogle);
  yield takeEvery(types.LOGIN, reqLogin);
  yield takeEvery(types.GET_MY_PROFILE, reqGetMe);
  yield takeLatest(types.FILTER_USER, reqFilterUser);
  yield takeLatest(types.GET_MORE_USER, reqGetMoreFilterUser);
  yield takeEvery(types.ADD_USER, reqAddUser);
  yield takeEvery(types.UPDATE_USER, reqUpdateUser);
}
