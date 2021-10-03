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
    "&:nth-child(5) , &:nth-child(6)": {
      padding: 0,
    },
    "&:nth-child(7)": {
      padding: 0,
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

export const useStyles = makeStyles({
  container: {
    background: "white",
    margin: "12px 0px",
    padding: "24px 0px",
    display: "flex",
    flexWrap: "wrap",
    borderRadius: 12,

    "& > div": {
      display: "flex",
      justifyContent: "center",
      width: "100%",
    },
  },
  pagination: {
    paddingTop: "24px",
  },
});
