import { makeStyles, Select, withStyles, TextField } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
    padding: "24px",
    height: "2000px",
    borderRadius: "12px",
    maxWidth: "700px",
    margin: "auto",
  },
  form: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    flexDirection: "column",
    minWidth: "350px",
    "& > div": {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      paddingBottom: "12px",
      alignItems: "center",
    },
  },
}));

export const StyledSelect = withStyles((theme) => ({
  root: {},
  outlined: {
    width: "178px",
  },
}))(Select);

export const StyledTextField = withStyles((theme) => ({
  root: {
    maxWidth: "224px",
    width: "224px",
    "& > div": {
      padding: "8px 0px",
    },
  },
}))(TextField);
