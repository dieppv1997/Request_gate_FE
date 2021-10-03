import { makeStyles } from "@material-ui/core";
import theme from "../../constant/theme";
const styles = makeStyles({
  box: {
    borderRadius: "6px",
    background: "#fff",
    boxShadow: "6px 6px 12px 0px rgba(1, 1, 1, 0.1)",
  },
  title: {
    height: 50,
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "600",
  },
  headingBox: {
    marginBottom: 20,
  },
  container: {
    display: "block",
  },
  item: {
    marginTop: 20,
  },
  detail: {
    border: "2px solid #ccc",
    borderRadius: "4px",
  },

  button: {
    color: theme.palette.white.main,
    padding: "8px 10px",
    textTransform: "capitalize",
    fontSize: "1rem",
  },
  itemTitle: {
    display: "block",
    marginRight: 8,
    fontWeight: "bold",
  },
  itemInput: {
    width: 200,
  },
  icon: {
    marginRight: 4,
  },
  boxRelative: {
    position: "relative",
  },
  errorContent: {
    color: theme.palette.error.main,
    fontSize: "0.7rem",
    fontWeight: "bold",
    position: "absolute",
  },
});
export default styles;
