import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    gap: "2%",
    "& > div": {
      flexGrow: 1,
      padding: 0,
    },
    "& > *": {
      padding: "15px",
    },
    "& > button:nth-child(2)": {},
  },
}));
