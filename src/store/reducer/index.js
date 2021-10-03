import { combineReducers } from "redux";
import dataUser from "./user";
import loading from "./loading";
import { dataRequest } from "./request";
import { drawerOpen } from "./drawer";
import { dataCategory } from "./categoryList";
import dataDepartment from "./department";

export const rootReducer = combineReducers({
  dataUser,
  loading,
  drawerOpen,
  dataRequest,
  dataCategory,
  dataDepartment,
});
