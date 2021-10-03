import { useState } from "react";
import {
  Button,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import { useSnackbar } from "notistack";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { useHistory, useParams } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { useStyles } from "./style";
import LayoutLogin from "./../../layouts/LayoutLogin";
import { validatePassword } from "./../../helpers";
import { changePassword } from "./../../services/apiUser";
import { STATUS_API } from "../../constant";
import { ALL_LINK } from "../../constant";

const validationSchema = yup.object({
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password cần lớn hơn 8 kí tự"),
  confirmPassword: yup.string().required("Confirm password is required"),
});

function ChangePassword() {
  const history = useHistory();
  const params = useParams();
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [formValue, setFormValue] = useState({
    showPassword: false,
  });
  const setShowPassword = () => {
    setFormValue({ ...formValue, showPassword: !formValue.showPassword });
  };
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validate: (values) => {
      const errors = {};
      if (!validatePassword(values.password)) {
        errors.password = "Mật khẩu cần có kí tự đặc biệt ,in hoa ,in thường!";
      }
      if (values.password !== values.confirmPassword) {
        errors.confirmPassword = "Mật khẩu không khớp!";
      }
      return errors;
    },
    validationSchema,
    onSubmit: (values) => {
      changePassword({
        token: params.token,
        password: values.password,
        password_confirm: values.confirmPassword,
      })
        .then((res) => {
          if (res.status === STATUS_API.SUCCESS) {
            enqueueSnackbar("Cập nhật mật khẩu thành công!", {
              variant: "success",
            });
            history.push(ALL_LINK.HOME);
          } else {
            formik.setErrors({
              password: res?.data?.message?.password,
              confirmPassword: res?.data?.message?.password_confirm,
            });
          }
        })
        .catch((e) => {
          enqueueSnackbar("Đã có lỗi xảy ra!", { variant: "error" });
        });
    },
  });

  return (
    <LayoutLogin>
      <div className={classes.container}>
        <h2> Thay đổi mật khẩu : </h2>
        <FormControl
          variant="outlined"
          error={formik.touched.password && Boolean(formik.errors.password)}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={formValue.showPassword ? "text" : "password"}
            value={formik.values.password}
            onChange={formik.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={setShowPassword}>
                  {formValue.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <FormHelperText>
            {formik.touched.password && formik.errors.password}
          </FormHelperText>
        </FormControl>

        <FormControl
          variant="outlined"
          error={
            formik.touched.confirmPassword &&
            Boolean(formik.errors.confirmPassword)
          }
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="confirmPassword"
            id="outlined-adornment-password"
            type={formValue.showPassword ? "text" : "password"}
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={setShowPassword}>
                  {formValue.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
          <FormHelperText>
            {formik.touched.confirmPassword && formik.errors.confirmPassword}
          </FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          onClick={formik.handleSubmit}
          className={classes.submit}
        >
          Submit
        </Button>
      </div>
    </LayoutLogin>
  );
}

export default ChangePassword;
