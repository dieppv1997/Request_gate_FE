import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "24px",
  },
  email: {
    padding: "24px 0px",
    width: "100%",
    "& > div": {
      width: "100%",
    },
  },
  submit: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    paddingBottom: "12px",
    "& > button": {
      width: "100%",
      textTransform: "none",
    },
  },
}));
