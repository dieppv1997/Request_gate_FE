import React from "react";
import { Button, FormControl, FormHelperText } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles, StyledSelect, StyledTextField } from "./style";
import { TYPE_POPUP } from "./../../../../constant/index";

export default function Popup(props) {
  const classes = useStyles();
  const { open, handleClose, typePopup, assignee, formik } = props;

  return (
    <div>
      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>
          {typePopup === TYPE_POPUP.ADD ? "Add" : "Update"} category
        </DialogTitle>
        <DialogContent dividers={true}>
          <div className={classes.form}>
            <div>
              <span> Name </span>
              <StyledTextField
                variant="outlined"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                error={formik.touched.name && Boolean(formik.errors.name)}
                helperText={formik.touched.name && formik.errors.name}
              />
            </div>

            <div>
              <span> Assignee </span>
              <FormControl
                error={
                  formik.touched.assignee && Boolean(formik.errors.assignee)
                }
              >
                <StyledSelect
                  native
                  variant="outlined"
                  name="assignee"
                  value={formik.values.assignee}
                  onChange={formik.handleChange}
                >
                  <option value=""> none </option>
                  {assignee?.map((e) => {
                    return (
                      <option value={e.id} key={e.id}>
                        {e.name}
                      </option>
                    );
                  })}
                </StyledSelect>
                <FormHelperText>
                  {formik.touched.assignee && formik.errors.assignee}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <span> Status </span>
              <StyledSelect
                native
                variant="outlined"
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
              >
                <option value="enable"> enable </option>
                <option value="disable"> disable </option>
              </StyledSelect>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={formik.handleSubmit} color="primary">
            {typePopup === TYPE_POPUP.ADD ? "Add" : "Update"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
