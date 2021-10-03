import * as types from "../type";

export const getRequest = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.GET_REQUEST,
    data,
    callbackFail,
    callbackSuccess,
  };
};

export const getRequestSuccess = (data) => {
  return {
    type: types.GET_REQUEST_SUCCESS,
    payload: data,
  };
};

export const getRequestFail = () => {
  return {
    type: types.GET_REQUEST_FAIL,
  };
};

export const getListHistoryRequest = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.GET_LIST_HISTORY_REQUEST,
    data,
    callbackFail,
    callbackSuccess,
  };
};

export const getListHistoryRequestSuccess = (data) => {
  return {
    type: types.GET_LIST_HISTORY_REQUEST_SUCCESS,
    payload: data,
  };
};

export const getListHistoryRequestFail = () => {
  return {
    type: types.GET_LIST_HISTORY_REQUEST_FAIL,
  };
};

export const addRequest = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.ADD_REQUEST,
    payload: data,
    callbackSuccess,
    callbackFail,
  };
};
export const addRequestSuccess = (data) => {
  return {
    type: types.ADD_REQUEST_SUCCESS,
    payload: data,
  };
};
export const addRequestFailed = () => {
  return {
    type: types.ADD_REQUEST,
  };
};
export const fetchRequestDetail = (id, callbackSuccess) => {
  return { type: types.FETCH_REQUEST_DETAIL, payload: id };
};
export const fetchRequestDetailSuccess = (data) => {
  return { type: types.FETCH_REQUEST_DETAIL_SUCCESS, payload: data };
};

export const updateRequest = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.UPDATE_REQUEST,
    payload: data,
    callbackSuccess,
    callbackFail,
  };
};
export const updateRequestSuccess = (data) => {
  return { type: types.UPDATE_REQUEST_SUCCESS, payload: data };
};
export const updateRequestFail = (error) => {
  return { type: types.UPDATE_REQUEST_FAILED, payload: error };
};
export const deleteRequest = (id, callback) => {
  return { type: types.DELETE_REQUEST, payload: id, callback };
};
