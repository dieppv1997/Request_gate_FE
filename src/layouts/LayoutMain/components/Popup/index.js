import React from "react";
import { useSnackbar } from "notistack";
import * as yup from "yup";
import { useFormik } from "formik";
import { Button } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { TYPE_POPUP_IN_LAYOUT_MAIN } from "../../../../constant";
import ChangePassword from "./../ChangePassword";
import MyProfile from "../MyProfile";
import axiosClient from "./../../../../services/axiosClient";
import { validatePassword } from "./../../../../helpers";

const validationSchema = yup.object({
  oldPassword: yup
    .string()
    .required("Old password is required")
    .max(191, "Không vượt quá 191 kí tự"),
  newPassword: yup
    .string()
    .required("New password is required")
    .max(191, "Không vượt quá 191 kí tự")
    .min(8, "Password cần lớn hơn 8 kí tự"),
  confirmNewPassword: yup
    .string()
    .required("Comfirm password is required")
    .max(191, "Không vượt quá 191 kí tự")
    .min(8, "Password cần lớn hơn 8 kí tự"),
});
export default function Popup(props) {
  const { enqueueSnackbar } = useSnackbar();
  const { open, handleClose, typePopup, dataDepartment, formik } = props;
  const formikInPassword = useFormik({
    initialValues: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
    validationSchema,
    validate: (values) => {
      const errors = {};
      if (!validatePassword(values.newPassword)) {
        errors.newPassword =
          "Mật khẩu cần có kí tự đặc biệt ,in hoa ,in thường!";
      }
      if (values.newPassword !== values.confirmNewPassword) {
        errors.confirmNewPassword = "Mật khẩu không khớp!";
      }
      return errors;
    },
    onSubmit: (values) => {
      const { oldPassword, newPassword } = values;
      axiosClient
        .post("/changePassword", {
          oldPassword,
          newPassword,
        })
        .then((d) => {
          enqueueSnackbar("Update password thành công !!", {
            variant: "success",
          });
          handleClose();
        })
        .catch((e) => {
          formikInPassword.setErrors({
            oldPassword: "Mật khẩu không đúng",
          });
        });
    },
  });
  return (
    <div>
      <Dialog open={open} onClose={handleClose} scroll="paper">
        <DialogTitle>
          {typePopup === TYPE_POPUP_IN_LAYOUT_MAIN.MY_PROFILE
            ? "Thông tin tài khoản"
            : "Đổi mật khẩu"}
        </DialogTitle>
        <DialogContent dividers={true}>
          {typePopup === TYPE_POPUP_IN_LAYOUT_MAIN.MY_PROFILE && (
            <MyProfile dataDepartment={dataDepartment} formik={formik} />
          )}
          {typePopup === TYPE_POPUP_IN_LAYOUT_MAIN.CHANGE_PASSWORD && (
            <ChangePassword formik={formikInPassword} />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          {typePopup === TYPE_POPUP_IN_LAYOUT_MAIN.CHANGE_PASSWORD && (
            <Button onClick={formikInPassword.handleSubmit} color="primary">
              Submit
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </div>
  );
}
