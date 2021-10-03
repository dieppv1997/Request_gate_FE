import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Box,
  Grid,
  Typography,
} from "@material-ui/core";
import { TYPE_POPUP } from "../../../constant";
import styles from "./style";

const Popup = (props) => {
  const classes = styles();
  const { formik, open, typePopup, handleClosePopup } = props;
  return (
    <Dialog fullWidth maxWidth="xs" open={open} onClose={handleClosePopup}>
      <DialogTitle id="form-dialog-title">
        {typePopup === TYPE_POPUP.ADD
          ? "Add new department"
          : "Update department"}
      </DialogTitle>
      <DialogContent>
        <Box className={classes.boxRelative}>
          <TextField
            autoFocus
            variant="outlined"
            fullWidth
            name="name"
            label="name"
            value={formik.values.name}
            onChange={formik.handleChange}
          />
          {formik.errors.name && formik.touched.name ? (
            <Typography component="p" className={classes.errorContent}>
              {formik.errors.name}
            </Typography>
          ) : null}
        </Box>
      </DialogContent>
      <DialogActions>
        <Grid container className={classes.btnGroup} justify="space-between">
          <Button
            size="large"
            onClick={handleClosePopup}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            size="large"
            onClick={formik.handleSubmit}
            variant="contained"
            color="primary"
          >
            OK
          </Button>
        </Grid>
      </DialogActions>
    </Dialog>
  );
};

export default Popup;
