import * as types from "../type";

export const getDepartment = () => {
  return {
    type: types.GET_DEPARTMENT,
  };
};

export const getDepartmentSuccess = (data) => {
  return {
    type: types.GET_DEPARTMENT_SUCCESS,
    payload: data,
  };
};

export const getDepartmentFail = () => {
  return {
    type: types.GET_DEPARTMENT_FAIL,
  };
};
export const fetchDepartments = (page) => {
  return { type: types.FETCH_DEPARTMENT, payload: page };
};
export const fetchDepartmentsSuccess = (data) => {
  return { type: types.FETCH_DEPARTMENT_SUCCESS, payload: data };
};
export const fetchDepartmentsFailed = () => {
  return { type: types.FETCH_DEPARTMENT_FAILED };
};
export const filterDepartment = (query, callback) => {
  return { type: types.FILTER_DEPARTMENT, payload: query, callback };
};
export const filterDepartmentSuccess = (data) => {
  return { type: types.FILTER_DEPARTMENT_SUCCESS, payload: data };
};

export const createDepartment = (data, callback) => {
  return {
    type: types.CREATE_DEPARTMENT,
    payload: data,
    callback,
  };
};

export const editDepartment = (data, callbackSuccess, callbackFailed) => {
  return {
    type: types.EDIT_DEPARTMENT,
    payload: data,
    callbackSuccess,
    callbackFailed,
  };
};
