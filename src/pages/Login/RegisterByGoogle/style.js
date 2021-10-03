import { makeStyles, Select, withStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
    padding: "24px",
    margin: "auto",
    minWidth: 450,
    "& > h4": {
      width: "100%",
      padding: "24px 0px",
    },
    "& > div": {
      width: "100%",
    },
    "& > button": {
      width: "100%",
      margin: "24px 0px",
    },
  },
}));

export const StyledSelect = withStyles((theme) => ({
  root: {
    width: "100%",
  },
  outlined: {
    width: "100%",
  },
}))(Select);
