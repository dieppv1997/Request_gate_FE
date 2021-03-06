import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Button,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { useStyles, StyledTableCell, StyledTableRow } from "./style";
import { TYPE_POPUP } from "./../../../../constant";

export default function ListCategory(props) {
  const { handleOpenPopup } = props;
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {props.data.length ? (
        <>
          <Table className={classes.table} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell> STT </StyledTableCell>
                <StyledTableCell align="center"> Name </StyledTableCell>
                <StyledTableCell align="center"> Assignee </StyledTableCell>
                <StyledTableCell align="center"> Status </StyledTableCell>
                <StyledTableCell align="center"> Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.length &&
                props.data.map((row, index) => (
                  <StyledTableRow
                    key={index}
                    onClick={handleOpenPopup(TYPE_POPUP.UPDATE, row)}
                  >
                    <StyledTableCell component="th" scope="row">
                      {index + 1}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row?.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row?.user?.name}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {row?.status}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        onClick={handleOpenPopup(TYPE_POPUP.UPDATE, row)}
                        variant="outlined"
                        color="primary"
                      >
                        <EditIcon />
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>

          <div className={classes.pagination}>
            <Pagination
              count={props.countPages}
              page={props.page}
              color="primary"
              onChange={props.handleChangePages}
            />
          </div>
        </>
      ) : (
        <div> Kh??ng c?? category n??o </div>
      )}
    </div>
  );
}
