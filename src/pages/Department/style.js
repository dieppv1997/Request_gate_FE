import { TableRow, TableCell, withStyles, makeStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "600",
  },
  body: {
    fontSize: "14px",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "70px",
    cursor: "pointer",
    userSelect: "none",
    textAlign: "center",
    "&:nth-child(1)": {
      textAlign: "left",
    },
    "&:last-child": {
      textAlign: "right",
    },
  },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export const styles = makeStyles((theme) => ({
  box: {
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "6px 6px 12px 0px rgba(1, 1, 1, 0.1)",
  },
  heading__content: {
    display: "block",
    margin: "0 auto",
    textAlign: "center",
    fontSize: "1.8rem",
    fontWeight: "bold",
  },
  table: {
    margin: "0 auto",
    borderRadius: "10px",
    marginBottom: 20,
  },
  editBtn: {
    textTransform: "capitalize",
    background: theme.palette.primary.main,
    color: theme.palette.white.main,
    "&:hover": {
      background: theme.palette.primary.main,
      color: theme.palette.white.main,
    },
  },
  editIcon: {
    fontSize: "1.2rem",
    marginRight: 4,
  },
  searchGroup: {
    marginBottom: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
  loading: {
    display: "flex",
    margin: "0 auto",
    width: "100%",
    justifyContent: "center",
    marginBlock: 40,
  },
  searchInput: {
    flex: 1,
    "& input": {},
  },
  tableWrap: {
    marginRight: "auto",
    marginLeft: "auto",
  },
  addBtn: {
    paddingInline: 15,
    textTransform: "capitalize",
    "& span": { fontsize: "20px" },
    marginLeft: 20,
    fontSize: "1.1rem",
  },
  dialog: {
    width: "90%",
  },
}));
