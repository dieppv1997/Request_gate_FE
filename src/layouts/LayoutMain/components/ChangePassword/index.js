import React from "react";
import { TextField } from "@material-ui/core";
import { useStyles } from "./style";

export default function ChangePassword({ formik }) {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <TextField
        type="password"
        value={formik.values.oldPassword}
        onChange={formik.handleChange}
        label="Old password"
        variant="outlined"
        name="oldPassword"
        error={formik.touched.oldPassword && Boolean(formik.errors.oldPassword)}
        helperText={formik.touched.oldPassword && formik.errors.oldPassword}
      />
      <TextField
        type="password"
        value={formik.values.newPassword}
        onChange={formik.handleChange}
        label="New password"
        variant="outlined"
        name="newPassword"
        error={formik.touched.newPassword && Boolean(formik.errors.newPassword)}
        helperText={formik.touched.newPassword && formik.errors.newPassword}
      />
      <TextField
        type="password"
        value={formik.values.confirmNewPassword}
        onChange={formik.handleChange}
        label="Confim password"
        variant="outlined"
        name="confirmNewPassword"
        error={
          formik.touched.confirmNewPassword &&
          Boolean(formik.errors.confirmNewPassword)
        }
        helperText={
          formik.touched.confirmNewPassword && formik.errors.confirmNewPassword
        }
      />
    </div>
  );
}
