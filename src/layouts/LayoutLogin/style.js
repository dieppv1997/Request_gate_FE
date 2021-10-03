import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40px",
    padding: "6px 0px",
    borderBottom: "1px solid rgba(0,0,0,0.1)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    background: "white",
    zIndex: "15",
  },
  body: {
    background: "white",
    margin: "auto",
    padding: "24px",
    alignItems: "center",
    "& > h1": {
      width: "100%",
      textAlign: "left",
      padding: "12px 0px",
      fontWeight: 300,
      "@media (max-width :768px)": {
        textAlign: "center",
      },
    },
    "@media (min-width :768px)": {
      width: "960px",
    },
    "@media (max-width :768px)": {
      width: "100%",
      display: "flex",
      flexDirection: "column",
    },
  },
  content: {
    display: "flex",
    justifyContent: "space-between",
    "& > div": {
      width: "49%",
      "@media (max-width :768px)": {
        width: "100%",
        padding: "12px 0px",
      },
      "&:nth-child(2)": {
        boxShadow: "-5px 6px 16px -1px rgb(0 0 0 / 10%)",
        borderRadius: "12px",
      },
    },
    "@media (max-width :768px)": {
      width: "100%",
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
  info: {
    "& > div": {
      paddingBottom: 24,
    },
  },
}));
