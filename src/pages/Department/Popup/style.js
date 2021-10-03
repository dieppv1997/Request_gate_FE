import { makeStyles } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  boxRelative: {
    position: "relative",
    marginBottom: 18,
  },
  errorContent: {
    position: "absolute",
    color: theme.palette.error.main,
    fontSize: "0.8rem",
  },
  btnGroup: {
    margin: "0 8% 3% 8%",
  },
}));
export default styles;
