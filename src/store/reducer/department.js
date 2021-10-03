import * as types from "../type";

const initalState = {
  allData: [],
  infoPage: {},
};

const dataDepartment = (state = initalState, action) => {
  switch (action.type) {
    case types.LOGOUT:
      return initalState;
    case types.FETCH_DEPARTMENT_SUCCESS:
      return { ...state, data: action.payload, list: action.payload.data };
    case types.FILTER_DEPARTMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        list: action.payload.data,
      };
    case types.GET_DEPARTMENT_SUCCESS:
      return {
        ...state,
        allData: action.payload,
      };
    case types.GET_DEPARTMENT_FAIL:
      return state;
    default:
      return state;
  }
};
export default dataDepartment;
