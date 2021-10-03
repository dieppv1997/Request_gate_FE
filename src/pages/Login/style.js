import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  password: {
    width: "100%",
    padding: "12px",
    "&> div": {
      width: "100%",
    },
    "& button": {
      width: 60,
    },
  },
  email: {
    width: "100%",
    padding: "12px",
    "&> div": {
      width: "100%",
    },
  },
  config: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    padding: "12px",
    "& > label": {
      cursor: "pointer",
      userSelect: "none",
    },
  },
  submit: {
    padding: "12px",
    "& > button": {
      width: "100%",
      padding: "12px 0px",
      margin: "12px 0px",
    },
  },
}));
