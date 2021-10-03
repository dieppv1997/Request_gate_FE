import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    background: "white",
    padding: "24px 5%",
    borderRadius: "12px",
    margin: "auto",
    "&>h1": {
      textAlign: "center",
      padding: "24px",
    },
  },
}));
