import { makeStyles } from "@material-ui/core";
import theme from "../../../constant/theme";
const styles = makeStyles({
  box: {
    padding: "40px 64px",
    borderRadius: "6px",
    background: "#fff",
    boxShadow: "6px 6px 12px 0px rgba(1, 1, 1, 0.1)",
    "@media (max-width :768px)": {
      padding: 20,
    },
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "600",
  },

  item: {
    display: "block",
    width: 90,
    fontWeight: 600,
    "@media (max-width :462px)": {
      display: "none",
    },
  },
  detail: {
    border: "2px solid #ccc",
    borderRadius: "4px",
    padding: "32px",
    "@media (max-width:768px)": {
      padding: 20,
    },
    marginTop: 20,
  },

  textField: {
    width: 200,
    formControl: { width: 20 },
    fontStyle: "italic",
    "& input": {
      display: "flex",
      alignItem: "center",
      lineHeigh: 1,
    },
    "@media (min-width :1600px)": {
      width: "calc(20vw)",
    },
  },
  italicLabel: {
    fontStyle: "italic",
  },

  button: {
    color: theme.palette.white.main,
    textTransform: "capitalize",
  },
  errorContent: {
    color: theme.palette.error.main,
    fontSize: "0.8rem",
    fontStyle: "italic",
    position: "absolute",
    zIndex: "10",
  },
  rowForm: {
    marginBottom: 15,
  },
  boxRelative: {
    position: "relative",
  },
  itemWrap: {
    "@media (max-width:960px)": {
      "&:nth-child(2n+1)": {
        marginBottom: 30,
      },
    },
  },
});
export default styles;
