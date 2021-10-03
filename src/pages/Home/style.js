import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  container: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    gap: 24,
    "@media (max-width :1550px)": {
      gap: 12,
    },
    "&> div  h1": {
      width: "100%",
      textAlign: "center",
      padding: "24px",
      fontSize: 25,
    },
  },
  listRequest: {
    flexBasis: "80%",
    background: "white",
    borderRadius: "24px",
    padding: "0px 12px",
  },
  historyRequest: {
    flexBasis: "20%",
  },
  "@media (max-width:1370px)": {
    inPageHome: {
      "& > div:nth-child(2)": {
        display: "none",
      },
      "& > div:nth-child(1)": {
        flexBasis: "100%",
      },
    },
    inPageHistory: {
      "& > div:nth-child(1)": {
        display: "none",
      },
      "& > div:nth-child(2)": {
        flexBasis: "100%",
      },
    },
  },
});
