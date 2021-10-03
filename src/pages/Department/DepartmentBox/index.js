import React from "react";
import AddIcon from "@material-ui/icons/Add";
import {
  Box,
  Button,
  Grid,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import CircularProgress from "@material-ui/core/CircularProgress";

import EditRoundedIcon from "@material-ui/icons/EditRounded";
import LayoutMain from "../../../layouts/LayoutMain";
import { StyledTableCell, StyledTableRow } from "../style";
import { TYPE_POPUP } from "../../../constant";

const DepartmentBox = (props) => {
  const {
    classes,
    query,
    handleFilter,
    handleClickOpen,
    departments,
    page,
    department,
    handleChangePage,
  } = props;
  return (
    <LayoutMain>
      <Box paddingX={10} paddingY={6} className={classes.box}>
        <Grid container justify="center" alignItems="center">
          <Grid
            container
            item
            xs={12}
            justify="center"
            className={classes.heading}
          >
            <Typography component="h2" className={classes.heading__content}>
              List Department
            </Typography>
          </Grid>
          <Grid container item xs={10} className={classes.searchGroup}>
            <TextField
              value={query}
              placeholder="Search..."
              className={classes.searchInput}
              onChange={handleFilter}
              variant="outlined"
            />
            <Button
              className={classes.addBtn}
              variant="outlined"
              color="primary"
              onClick={() => handleClickOpen(TYPE_POPUP.ADD)}
            >
              <AddIcon />
              Add
            </Button>
          </Grid>
          <Grid
            container
            item
            xs={10}
            justify="center"
            className={classes.tableWrap}
          >
            {departments?.length > 0 ? (
              <>
                <Table className={classes.table} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="left">No</StyledTableCell>
                      <StyledTableCell align="center">Name</StyledTableCell>
                      <StyledTableCell align="center">
                        Create at
                      </StyledTableCell>
                      <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {departments.map((department, index) => {
                      return (
                        <StyledTableRow
                          onClick={() =>
                            handleClickOpen(TYPE_POPUP.UPDATE, department)
                          }
                          key={department.id}
                        >
                          <StyledTableCell align="left">
                            {index + 1}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {department.name}
                          </StyledTableCell>
                          <StyledTableCell align="center">
                            {department.created_at}
                          </StyledTableCell>
                          <StyledTableCell align="right">
                            <Button className={classes.editBtn}>
                              <EditRoundedIcon className={classes.editIcon} />
                              Edit
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </Table>
                <Pagination
                  count={department?.last_page}
                  page={page}
                  color="primary"
                  onChange={handleChangePage}
                />
              </>
            ) : (
              <Box className={classes.loading}>
                <CircularProgress disableShrink />
              </Box>
            )}
          </Grid>
        </Grid>
      </Box>
    </LayoutMain>
  );
};

export default DepartmentBox;
