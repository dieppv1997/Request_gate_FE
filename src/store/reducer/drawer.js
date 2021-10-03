import * as type from "../type";
export const drawerOpen = (state = false, action) => {
  switch (action.type) {
    case type.TOGGLE_DRAWER:
      return { ...state, drawerOpen: !state.drawerOpen };
    default:
      return state;
  }
};
