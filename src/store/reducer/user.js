import * as types from "../type";

const initalState = {
  allData: [],
  infoPage: {},
  userDetail: {},
  me: {},
};

export default function dataUser(state = initalState, action) {
  switch (action.type) {
    case types.LOGOUT:
      return initalState;
    case types.LOGIN_SUCCESS:
      return { ...state, me: action.payload };
    case types.LOGIN_FAIL:
      return state;
    case types.FILTER_USER_SUCCESS:
      return {
        ...state,
        allData: action.payload.allData,
        infoPage: action.payload.infoPage,
      };
    case types.FILTER_USER_FAIL:
      return state;
    case types.ADD_USER_SUCCESS:
      return {
        ...state,
        allData: [action.payload, ...state.allData],
      };
    case types.ADD_USER_FAIL:
      return state;
    case types.UPDATE_USER_FAIL:
      return state;
    case types.UPDATE_USER_SUCCESS:
      const indexAllData = state.allData.findIndex(
        (e) => e.id === action.payload.id
      );
      if (indexAllData !== -1) {
        let newState = { ...state };
        newState.allData.splice(indexAllData, 1, action.payload);
        return newState;
      } else {
        return state;
      }
    default:
      return state;
  }
}
