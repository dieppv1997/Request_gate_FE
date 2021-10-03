import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { useSnackbar } from "notistack";
import { useStyles } from "./style";
import LayoutLogin from "./../../layouts/LayoutLogin";
import axiosClient from "./../../services/axiosClient";
import { closeLoading, openLoading } from "./../../store/action/loading";
import { validateEmail } from "./../../helpers/index";

function ForgotPassword() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [dataEmail, setDataEmail] = useState("");

  const handleChangeForm = (e) => {
    setDataEmail(e.target.value);
  };

  const submit = () => {
    if (validateEmail(dataEmail)) {
      dispatch(openLoading());
      axiosClient
        .post("auth/forgot", {
          email: dataEmail,
        })
        .then((d) => {
          enqueueSnackbar("Bạn vui lòng kiểm tra email !", {
            variant: "success",
          });
          dispatch(closeLoading());
        })
        .catch((e) => {
          enqueueSnackbar(e.response.data.message, {
            variant: "error",
          });
          dispatch(closeLoading());
        });
    } else {
      enqueueSnackbar("Địa chỉ email bạn nhập không đúng", {
        variant: "error",
      });
    }
  };

  return (
    <LayoutLogin>
      <div className={classes.container}>
        <div className={classes.email}>
          <TextField
            type="text"
            name="email"
            value={dataEmail}
            onChange={handleChangeForm}
            variant="outlined"
            label="email"
          />
        </div>
        <div className={classes.submit}>
          <Button variant="contained" color="primary" onClick={submit}>
            Reset password
          </Button>
        </div>
        <NavLink to="/login"> Đăng nhập </NavLink>
      </div>
    </LayoutLogin>
  );
}

export default ForgotPassword;
