import React from "react";
import { Button, FormControl, FormHelperText } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useStyles, StyledSelect, StyledTextField } from "./style";
import { TYPE_POPUP } from "./../../../../constant/index";
import { ROLE } from "./../../../../constant";

export default function Popup(props) {
  const classes = useStyles();
  const { open, handleClose, typePopup, dataDepartment, formik } = props;
  return (
    <div>
      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>
          {typePopup === TYPE_POPUP.ADD ? "Add" : "Update"} user
        </DialogTitle>
        <DialogContent dividers={true}>
          <div className={classes.form}>
            <div>
              <span> Name </span>
              <div>
                <StyledTextField
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  variant="outlined"
                  color="primary"
                  size="small"
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </div>
            </div>
            <div>
              <span> Email </span>
              <div>
                <StyledTextField
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  variant="outlined"
                  color="primary"
                  size="small"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </div>
            </div>
            <div>
              <span> Department </span>
              <FormControl
                error={
                  formik.touched.department && Boolean(formik.errors.department)
                }
              >
                <StyledSelect
                  native
                  variant="outlined"
                  name="department"
                  value={formik.values.department}
                  onChange={formik.handleChange}
                  inputProps={{
                    name: "department",
                  }}
                >
                  {dataDepartment?.map((e) => {
                    return (
                      <option key={e.id} value={e.id}>
                        {e.name}
                      </option>
                    );
                  })}
                </StyledSelect>
                <FormHelperText>
                  {formik.touched.department && formik.errors.department}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <span> Role </span>
              <FormControl
                error={formik.touched.role && Boolean(formik.errors.role)}
              >
                <StyledSelect
                  name="role"
                  value={formik.values.role}
                  onChange={formik.handleChange}
                  native
                  variant="outlined"
                  inputProps={{
                    name: "role",
                  }}
                >
                  <option value={ROLE.ADMIN}> admin </option>
                  <option value={ROLE.PM}> PM </option>
                  <option value={ROLE.USER}> user </option>
                </StyledSelect>
                <FormHelperText>
                  {formik.touched.role && formik.errors.role}
                </FormHelperText>
              </FormControl>
            </div>

            <div>
              <span> Status </span>
              <StyledSelect
                name="status"
                value={formik.values.status}
                onChange={formik.handleChange}
                native
                variant="outlined"
                inputProps={{
                  name: "status",
                }}
              >
                <option value="active"> active </option>
                <option value="inactive"> inactive </option>
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
