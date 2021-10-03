import * as types from "../type";
export const categoryList = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_CATEGORY_SUCCESS:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

const initialState = {
  allData: [],
  infoPage: {},
  categoryDetail: {},
  assignee: [],
};

export function dataCategory(state = initialState, action) {
  switch (action.type) {
    case types.LOGOUT:
      return initialState;
    case types.FILTER_CATEGORY_SUCCESS:
      return {
        ...state,
        allData: action.payload.allData,
        infoPage: action.payload.infoPage,
      };
    case types.FILTER_CATEGORY_FAIL:
      return state;
    case types.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        allData: [
          {
            ...action.payload,
            user: state.assignee.find(
              (e) => parseInt(e.id) === parseInt(action.payload.user_id)
            ),
          },
          ...state.allData,
        ],
      };
    case types.ADD_CATEGORY_FAIL:
      return state;
    case types.UPDATE_CATEGORY_FAIL:
      return state;
    case types.UPDATE_CATEGORY_SUCCESS:
      const indexAllData = state.allData.findIndex(
        (e) => e.id === action.payload.id
      );
      if (indexAllData !== -1) {
        let newState = { ...state };
        newState.allData.splice(indexAllData, 1, {
          ...action.payload,
          user: state.assignee.find(
            (e) => parseInt(e.id) === parseInt(action.payload.user_id)
          ),
        });
        return newState;
      } else {
        return state;
      }
    case types.FETCH_ALL_CATEGORY_SUCCESS:
      return {
        ...state,
        allData: action.payload.allData,
        infoPage: action.payload.infoPage,
      };
    case types.FETCH_ALL_ASSIGNEE_SUCCESS:
      return {
        ...state,
        assignee: action.payload,
      };
    default:
      return state;
  }
}
