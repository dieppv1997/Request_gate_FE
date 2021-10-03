import HomeIcon from "@material-ui/icons/Home";
import AddIcon from "@material-ui/icons/Add";
import HistoryIcon from "@material-ui/icons/History";

export const ALL_LINK = {
  LOGIN: "/login",
  FORGOT_PASSWORD: "/forgot_password",
  CHANGE_PASSWORD: "/change_password/:token",
  HOME: "/",
  HISTORY_REQUEST: "/history_request",
  CREATE_REQUEST: "/create_request",
  UPDATE_REQUEST: "/update_request",
  DETAIL_REQUEST: "/detail_request",
  USER: "/user",
  CATEGORY: "/category",
  DEPARTMENT: "/department",
};

export const LIST_MENU = [
  {
    title: "Home",
    icon: <HomeIcon />,
    link: ALL_LINK.HOME,
  },
  {
    title: "History request",
    icon: <HistoryIcon />,
    link: ALL_LINK.HISTORY_REQUEST,
  },
  {
    title: "Create Request",
    icon: <AddIcon />,
    link: ALL_LINK.CREATE_REQUEST,
  },
];

export const TYPE_REQUEST = {
  CREATE: "create",
  UPDATE: "update",
};

export const REGEX_EMAIL =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const REGEX_NUMBER = /[0-9]/g;
export const REGEX_UPPERCASE = /[A-Z]/g;
export const SPECIAL_CHARATERS = /[^A-Za-z0-9]/;
export const REGEX_LOWERCASE = /[a-z]/g;

export const Z_INDEX_POPUP =
  "999999999999999999999999999999999999999999999999999";

export const ROLE = {
  ADMIN: 1,
  PM: 2,
  USER: 3,
};
export const TEXT_ROLE = ["Admin", "PM", "User"];

export const TYPE_POPUP = {
  UPDATE: "UPDATE",
  ADD: "ADD",
};

export const TYPE_POPUP_IN_LAYOUT_MAIN = {
  CHANGE_PASSWORD: "CHANGE_PASSWORD",
  MY_PROFILE: "MY_PROFILE",
};

export const TYPE_GET_DATA_USER = {
  GET_MORE: "GET_MORE",
};

export const CLIENT_ID =
  "211349294009-k9cr20k2hfjreiia5rkfepa5a03oanhg.apps.googleusercontent.com";

export const STATUS_API = {
  SUCCESS: 200,
};

export const TYPE_COMMENT = {
  updateRequest: 2,
  commentRequest: 1,
};
export const STATUS_ADMIN = {
  open: "Open",
  inProgress: "In progress",
  close: "Close",
};
export const LIST_STATUS_ADMIN = Object.values(STATUS_ADMIN);

export const LIST_PRIORITY = ["High", "Medium", "Low"];

export const STATUS_VARIANT = {
  success: "success",
  error: "error",
};
export const STATUS_PM = {
  open: "Open",
  approve: "Approve",
  reject: "Reject",
};
