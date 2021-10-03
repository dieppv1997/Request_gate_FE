import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  title: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
  dialog: {
    marginTop: 10,
    "& h2": {
      fontSize: "1.8rem",
      fontWeight: 700,
      textAlign: "center",
    },
  },
  itemBox: {
    marginTop: 10,
    "&:last-child": {
      marginBottom: 30,
    },
  },
  btnGroup: {
    margin: "0 8%  8% 8%",
  },
  boxRelative: {
    position: "relative",
  },
  errorContent: {
    position: "absolute",
    color: theme.palette.error.main,
    fontSize: "0.8rem",
    fontWeight: "bold",
  },
}));
export default styles;
