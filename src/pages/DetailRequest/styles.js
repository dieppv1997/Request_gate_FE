import { makeStyles } from "@material-ui/core";
import { grey } from "@material-ui/core/colors";

const styles = makeStyles(
  (theme) => ({
    box: {
      borderRadius: "10px",
      background: "#fff",
      boxShadow: "6px 6px 12px 0px rgba(1, 1, 1, 0.1)",
    },
    heading: {
      fontSize: "1.6rem",
      fontWeight: "600",
      marginBottom: 10,
      textIndent: "18px",
      maxHeight: "100px",
      display: "-webkit-box",
      WebkitLineClamp: "2",
      WebkitBoxOrient: "vertical",
      textOverflow: "ellipsis",
      overflow: "hidden",
      "& :first-letter": {
        textTransform: "capitalize",
      },
    },
    avatar: {
      width: 60,
      height: 60,
      marginRight: 20,
    },
    nameUser: {
      fontWeight: "bold",
    },
    redBtn: {
      backgroundColor: theme.palette.error.main,
      color: theme.palette.white.main,
      marginLeft: 10,
      textTransform: "capitalize",
      "& svg": { marginRight: 4, fontSize: "1.1rem" },
      "&:hover": {
        backgroundColor: theme.palette.error.main,
        color: theme.palette.white.main,
      },
    },
    blueBtn: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.white.main,
      marginLeft: 10,
      textTransform: "capitalize",
      "& svg": { marginRight: 4, fontSize: "1.1rem" },
      "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white.main,
      },
    },
    description: {
      textIndent: 15,
      color: "#736e6e",
      fontSize: "1rem",
      "&:first-letter": {
        textTransform: "capitalize",
      },
    },
    create: {
      color: "green",
      fontSize: "0.8rem",
      fontStyle: "italic",
      "& >*": {
        fontStyle: "italic",
        fontSize: "0.8rem",
      },
    },
    avatarAssign: {
      width: 30,
      height: 30,
      marginRight: 5,
    },
    gridItem: {
      width: 90,
      fontWeight: 600,
    },
    wrapComment: {
      border: "2px solid #ccc",
      borderRadius: 8,
      padding: "20px",
      maxHeight: "350px",
      overflowY: "auto",
      marginBottom: 10,
    },
    commentHeading: {
      fontSize: "1.2rem",
    },
    commentText: {
      fontSize: "0.9rem",
      fontWeight: 400,
      color: grey[600],
      "&:first-letter": {
        textTransform: "capitalize",
      },
    },
    commentItem: {
      "&:last-child": {
        marginBottom: 0,
      },
    },
    avatarComment: {
      marginRight: 15,
    },

    commentInput: {
      marginTop: 20,
      display: "block",
      width: "100%",
      flex: 1,
      borderRadius: 8,
      background: "#f0f2f5",
    },
    commentDescription: {
      flex: 1,
      background: "#f0f2f5",
      padding: "10px 15px",
      borderRadius: 10,
    },
    editIcon: {
      display: "block",
      marginRight: 8,
      fontSize: "0.8rem",
    },
    btnNormal: {
      textTransform: "capitalize",
      marginLeft: 8,
    },
    btnEdit: {
      padding: "5px 10px ",
      fontSize: "1rem",
      color: theme.palette.white.main,
      background: theme.palette.warning.main,
      "&:hover": {
        background: theme.palette.warning.main,
      },
      textTransform: "capitalize",
    },
    statusLabel: {
      fontSize: "1rem",
      fontWeight: "bold",
      "& span": {
        paddingLeft: 0,
      },
      marginBottom: 10,
    },
    assignee: {
      display: "flex",
      alignItems: "center",
    },
    historyChange: {
      color: theme.palette.text.primary,
      listStyle: "circle",
      paddingLeft: "10px",
    },
    boxRelative: {
      position: "relative",
    },
    iconDetail: {
      fontSize: "1.4rem",
      marginRight: 4,
    },
    wordBreak: {
      fontSize: "0.8rem",
      wordBreak: "break-word",
    },
  }),

  { index: 1 }
);
export default styles;
