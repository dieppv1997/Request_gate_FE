import { TableRow, TableCell, withStyles, makeStyles } from "@material-ui/core";

export const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: "600",
    textAlign: "left",
    fontSize: 12,
  },
  body: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    cursor: "pointer",
    userSelect: "none",
    textAlign: "left",
    fontSize: "11px",
    paddingTop: "12px",
    paddingBottom: "12px",
    "&:nth-child(1) , &:nth-child(2)": {
      maxWidth: "170px",
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
    padding: "24px 12px",
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
    padding: "64px",
  },
});
