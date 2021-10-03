import * as types from "../type";

export const fetchCategoryList = () => {
  return { type: types.FETCH_CATEGORY };
};
export const fetchCategorySuccess = (data) => {
  return { type: types.FETCH_CATEGORY_SUCCESS, payload: data };
};
export const fetchCategoryFailed = () => {
  return { type: types.FETCH_CATEGORY_FAILED };
};

export const filterCategory = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.FILTER_CATEGORY,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const filterCategorySuccess = (data) => {
  return {
    type: types.FILTER_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const filterCategoryFail = () => {
  return {
    type: types.FILTER_CATEGORY_FAIL,
  };
};

export const addCategory = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.ADD_CATEGORY,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const addCategorySuccess = (data) => {
  return {
    type: types.ADD_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const addCategoryFail = () => {
  return {
    type: types.ADD_CATEGORY_FAIL,
  };
};

export const updateCategory = (data, callbackSuccess, callbackFail) => {
  return {
    type: types.UPDATE_CATEGORY,
    data,
    callbackSuccess,
    callbackFail,
  };
};

export const updateCategorySuccess = (data) => {
  return {
    type: types.UPDATE_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const updateCategoryFail = () => {
  return {
    type: types.UPDATE_CATEGORY_FAIL,
  };
};

export const fetchAllCategory = (page , name) => {
  return {
    type: types.FETCH_ALL_CATEGORY,
    page,
    name
  };
};

export const fetchAllCategorySuccess = (data) => {
  return {
    type: types.FETCH_ALL_CATEGORY_SUCCESS,
    payload: data,
  };
};

export const fetchAllCategoryFail = (data) => {
  return {
    type: types.FETCH_ALL_CATEGORY_FAIL,
    payload: data,
  };
};

export const fetchAllAssignee = (data) => {
  return {
    type: types.FETCH_ALL_ASSIGNEE,
    payload: data,
  };
};

export const fetchAllAssigneeSuccess = (data) => {
  return {
    type: types.FETCH_ALL_ASSIGNEE_SUCCESS,
    payload: data,
  };
};
export const fetchAllAssigneeFail = (data) => {
  return {
    type: types.FETCH_ALL_ASSIGNEE_FAIL,
    payload: data,
  };
};
