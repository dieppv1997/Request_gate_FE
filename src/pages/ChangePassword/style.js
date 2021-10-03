import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    padding: "24px",
    "& > div": {
      width: "100%",
      margin: "12px 0px",
    },
  },
  submit: {
    width: "100%",
    textTransform: "none",
  },
}));
