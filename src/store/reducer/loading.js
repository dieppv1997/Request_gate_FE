import * as types from "../type";

const initialState = false;

export default function loading(state = initialState, action) {
  switch (action.type) {
    case types.OPEN_LOADING:
      return true;
    case types.CLOSE_LOADING:
      return false;
    default:
      return state;
  }
}
