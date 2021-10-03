import React from "react";
import Pagination from "@material-ui/lab/Pagination";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  Tooltip,
} from "@material-ui/core";
import { useStyles, StyledTableCell, StyledTableRow } from "./style";
import { dateRequestToView } from "./../../../../helpers/date";

export default function ListRequest(props) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      {props.data?.length ? (
        <>
          <Table
            size="small"
            className={classes.table}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                <StyledTableCell> Name request </StyledTableCell>
                <StyledTableCell align="right">Content Request</StyledTableCell>
                <StyledTableCell align="right"> Author Create </StyledTableCell>
                <StyledTableCell align="right"> DueDate </StyledTableCell>
                <StyledTableCell align="right"> Category </StyledTableCell>
                <StyledTableCell align="right"> Assign </StyledTableCell>
                <StyledTableCell align="right"> Status AD </StyledTableCell>
                <StyledTableCell align="right"> Status PM </StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.length &&
                props.data.map((row, index) => (
                  <Tooltip
                    key={index}
                    title=" Click để xem chi tiết request .... "
                    placement="bottom"
                    arrow
                  >
                    <StyledTableRow
                      onClick={() => {
                        props.toPageRequestDetail(row.id);
                      }}
                    >
                      <StyledTableCell
                        title={row.title}
                        component="th"
                        scope="row"
                      >
                        {row?.title}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.content}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.user?.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {dateRequestToView(row?.due_date)}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.category?.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.admin?.name}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.status_admin}
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        {row?.status_manager}
                      </StyledTableCell>
                    </StyledTableRow>
                  </Tooltip>
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
        <div> Không có request nào </div>
      )}
    </div>
  );
}
