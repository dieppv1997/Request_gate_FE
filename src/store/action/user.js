import * as types from "../type";

export const getMyProfile = () => {
  return {
    type: types.GET_MY_PROFILE,
  };
};

export const getMyProfileSuccess = (data) => {
  return {
    type: types.GET_MY_PROFILE_SUCCESS,
    payload: data,
  };
};

export const getMyProfileFail = () => {
  return {
    type: types.GET_MY_PROFILE_FAIL,
  };
};

export const actionLogoutAll = () => {
  return {
    type: types.LOGOUT,
  };
};

export const login = (data) => {
  return {
    type: types.LOGIN,
    payload: data,
  };
};

export const loginSuccess = (data) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload: data,
  };
};

export const loginFail = () => {
  return {
    type: types.LOGIN_FAIL,
  };
};

export const registerGoogle = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.REGISTER_GOOGLE,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const registerGoogleSuccess = (data) => {
  return {
    type: types.REGISTER_GOOGLE_SUCCESS,
    payload: data,
  };
};

export const registerGoogleFail = () => {
  return {
    type: types.REGISTER_GOOGLE_FAIL,
  };
};

export const loginGoogle = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.LOGIN_GOOGLE,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const loginGoogleSuccess = (data) => {
  return {
    type: types.LOGIN_GOOGLE_SUCCESS,
    payload: data,
  };
};

export const loginGoogleFail = () => {
  return {
    type: types.LOGIN_GOOGLE_FAIL,
  };
};

export const filterUser = (
  data,
  callbackSuccess,
  callbackFail,
  typeGetData
) => {
  return {
    type: types.FILTER_USER,
    data,
    callbackSuccess,
    callbackFail,
    typeGetData,
  };
};

export const filterUserSuccess = (data) => {
  return {
    type: types.FILTER_USER_SUCCESS,
    payload: data,
  };
};

export const filterUserFail = () => {
  return {
    type: types.FILTER_USER_FAIL,
  };
};

export const getMoreFilterUser = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.FILTER_USER,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const getMoreFilterUserSuccess = (data) => {
  return {
    type: types.FILTER_USER_SUCCESS,
    payload: data,
  };
};

export const getMoreFilterUserFail = () => {
  return {
    type: types.FILTER_USER_FAIL,
  };
};

export const addUser = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.ADD_USER,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const addUserSuccess = (data) => {
  return {
    type: types.ADD_USER_SUCCESS,
    payload: data,
  };
};

export const addUserFail = () => {
  return {
    type: types.ADD_USER_FAIL,
  };
};

export const updateUser = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.UPDATE_USER,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const updateUserSuccess = (data) => {
  return {
    type: types.UPDATE_USER_SUCCESS,
    payload: data,
  };
};

export const updateUserFail = () => {
  return {
    type: types.UPDATE_USER_FAIL,
  };
};
