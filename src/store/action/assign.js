import * as types from "../type";

export const fetchAssign = (value) => {
  return { type: types.FETCH_ASSIGN, payload: value };
};
export const fetchAssignSuccess = (data) => {
  return { type: types.FETCH_ASSIGN_SUCCESS, payload: data };
};
