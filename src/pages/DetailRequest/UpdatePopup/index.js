import React from "react";

import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {
  Button,
  Select,
  MenuItem,
  Grid,
  Typography,
  TextField,
  Box,
} from "@material-ui/core";
import styles from "./style";
import { LIST_PRIORITY, LIST_STATUS_ADMIN } from "../../../constant";
const UpdatePopup = (props) => {
  const classes = styles();
  const { formik, isUpdate, handleCloseUpdate, listAssign, category } = props;
  return (
    <Dialog
      fullWidth
      maxWidth="xs"
      open={isUpdate}
      onClose={handleCloseUpdate}
      aria-labelledby="form-dialog-title"
      className={classes.dialog}
    >
      <DialogTitle className={classes.dialog} id="form-dialog-title">
        Update for Admin
      </DialogTitle>
      <DialogContent>
        <Grid container item alignItems="center" className={classes.itemBox}>
          <Grid item xs={4}>
            <Typography component="p" className={classes.title}>
              Status
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Select
              fullWidth
              name="status_admin"
              variant="outlined"
              onChange={formik.handleChange}
              value={formik.values.status_admin}
            >
              {LIST_STATUS_ADMIN.map((status, index) => (
                <MenuItem value={status} key={index}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container item alignItems="center" className={classes.itemBox}>
          <Grid item xs={4}>
            <Typography component="p" className={classes.title}>
              Priority
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Select
              onChange={formik.handleChange}
              fullWidth
              name="priority"
              variant="outlined"
              value={formik.values.priority}
            >
              {LIST_PRIORITY.map((priority, index) => (
                <MenuItem value={priority} key={index}>
                  {priority}
                </MenuItem>
              ))}
            </Select>
          </Grid>
        </Grid>
        <Grid container item alignItems="center" className={classes.itemBox}>
          <Grid item xs={4}>
            <Typography component="p" className={classes.title}>
              Category
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField disabled fullWidth variant="outlined" value={category} />
          </Grid>
        </Grid>
        <Grid container alignItems="center" className={classes.itemBox}>
          <Grid item xs={4}>
            <Typography component="p" className={classes.title}>
              Assign
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Select
              fullWidth
              name="admin_id"
              onChange={formik.handleChange}
              variant="outlined"
              value={formik.values.admin_id}
            >
              {listAssign.length > 0
                ? listAssign.map((assign, index) => (
                    <MenuItem value={assign.id} key={index}>
                      {assign.name}
                    </MenuItem>
                  ))
                : null}
            </Select>
          </Grid>
        </Grid>
        <Grid container alignItems="center" className={classes.itemBox}>
          <Grid item xs={4}>
            <Typography component="p" className={classes.title}>
              Due date
            </Typography>
          </Grid>
          <Grid item xs={8}>
            <Box className={classes.boxRelative}>
              <TextField
                fullWidth
                name="due_date"
                onChange={formik.handleChange}
                type="date"
                variant="outlined"
                value={formik.values?.due_date?.split(" ")[0]}
              />
              {formik.errors.due_date && formik.touched.due_date ? (
                <Typography component="p" className={classes.errorContent}>
                  {formik.errors.due_date}
                </Typography>
              ) : null}
            </Box>
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Grid container className={classes.btnGroup} justify="space-between">
          <Button
            size="large"
            onClick={handleCloseUpdate}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            size="large"
            onClick={formik.handleSubmit}
            color="primary"
            variant="contained"
          >
            Update
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default UpdatePopup;
