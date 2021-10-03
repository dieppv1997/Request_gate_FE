import { TYPE_COMMENT } from "../../constant";
import * as types from "../type";

const initialState = {
  allData: {
    data: [],
  },
  requestDetail: {},
  listComment: [],
  historyRequest: [],
  listAssign: [],
  categoryList: [],
};

export function dataRequest(state = initialState, action) {
  switch (action.type) {
    case types.LOGOUT:
      return initialState;
    case types.GET_REQUEST_SUCCESS:
      return { ...state, allData: action.payload };
    case types.GET_REQUEST_FAIL:
      return state;
    case types.ADD_REQUEST_SUCCESS:
      return { ...state, allData: state.allData.data.concat(action.payload) };
    case types.FETCH_REQUEST_DETAIL_SUCCESS:
      return { ...state, requestDetail: action.payload };
    case types.FETCH_CATEGORY_SUCCESS:
      return { ...state, categoryList: action.payload };
    case types.FETCH_ASSIGN_SUCCESS:
      return { ...state, listAssign: action.payload };
    case types.REFRESH_COMMENT:
      return { ...state, dataComment: {}, listComment: [] };
    case types.POST_COMMENT_SUCCESS:
      if (state.listComment.length > state.dataComment.per_page) {
        state.listComment.shift();
      }
      return {
        ...state,
        dataComment: {
          ...state.dataComment,
          to: state.dataComment.to + 1,
          total: state.dataComment.total + 1,
        },
        listComment: [...state.listComment, action.payload],
      };
    case types.FETCH_COMMENT_SUCCESS:
      const data = action.payload.data.map((item) => {
        if (item.type === TYPE_COMMENT.updateRequest) {
          const newContent = JSON.parse(item.content);
          return { ...item, content: newContent };
        }
        return item;
      });
      return {
        ...state,
        dataComment: action.payload,
        listComment: data.concat(state.listComment),
      };

    case types.GET_LIST_HISTORY_REQUEST_SUCCESS:
      return {
        ...state,
        historyRequest: action.payload,
      };
    case types.GET_LIST_HISTORY_REQUEST_FAIL:
      return state;
    default:
      return state;
  }
}
