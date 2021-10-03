import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  avatarItem: {
    background: "rgb(131,242,196)",
  },
  container: {
    background: "white",
    borderRadius: 24,
    height: "100%",
  },
  content: {
    padding: "0px 24px",
    "@media (max-width :1550px)": {
      padding: 0,
    },
  },
  item: {
    margin: "12px",
    boxShadow: "2px 2px 9px rgb(1 1 1 / 20%)",
    padding: "12px 12px",
    borderRadius: "12px",
  },
  headerItem: {
    flexWrap: "nowrap",
    paddingBottom: 12,
    "& > div:nth-child(2)": {
      color: "white",
      padding: "3px 12px",
      background: "#4cbd9b",
      borderRadius: "24px",
    },
  },
  contentItem: {
    fontSize: 12,
    marginTop: 8,
    "& > tbody > tr > td": {
      paddingRight: 12,
      color: "rgba(0,0,0,0.5)",
      fontWeight: 500,
      "& > p": {
        maxWidth: "150px",
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      },
    },
  },
  itemLinkRequest: {
    display: "flex",
    alignItems: "center",
    "& > span": {
      whiteSpace: "nowrap",
    },
  },
  linkRequest: {
    maxWidth: 210,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    display: "inline-flex",
    alignItems: "center",
    padding: "3px 0px",
    textDecoration: "none",
    color: "#148d76",
    background: "rgba(20,141,118 , 0.03)",
    "&:hover": {
      textDecoration: "underline",
      "& > span": {
        color: "black !important",
        textDecoration: "none !important",
        background: "none !important",
      },
    },
    "& > span": {
      color: "black !important",
      textDecoration: "none !important",
      background: "none !important",
    },
  },
  pagination: {
    padding: "24px 0px",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  rootList: {
    padding: 0,
    "& > *": {
      padding: 0,
    },
  },
  "@media (max-width:1370px)": {
    linkRequest: {
      maxWidth: "100%",
    },
  },
});
