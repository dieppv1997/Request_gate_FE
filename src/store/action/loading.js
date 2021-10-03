import * as types from "../type";

export const openLoading = () => {
  return {
    type: types.OPEN_LOADING,
  };
};
export const closeLoading = () => {
  return {
    type: types.CLOSE_LOADING,
  };
};
