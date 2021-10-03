import { useState, useEffect } from "react";
import GoogleLogin from "react-google-login";
import {
  Button,
  IconButton,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  TextField,
  FormControl,
  Dialog,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { NavLink, useHistory } from "react-router-dom";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";
import LayoutLogin from "./../../layouts/LayoutLogin";
import { login, loginGoogle, registerGoogle } from "./../../store/action/user";
import { openLoading, closeLoading } from "./../../store/action/loading";
import { validateEmail } from "./../../helpers";
import { CLIENT_ID } from "../../constant";
import RegisterByGoogle from "./RegisterByGoogle";
import { getDepartment } from "./../../store/action/department";

function Login() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const dataDepartment = useSelector((state) => state.dataDepartment);
  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
    rememberMe: "",
    showPassword: false,
    departmentId: 1,
  });
  const [dataRegisterByGoogle, setDataRegisterByGoogle] = useState(null);
  useEffect(() => {
    dispatch(getDepartment());
  }, [dispatch]);
  const handleChangeForm = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;

    setFormValue({
      ...formValue,
      [name]: value,
    });
  };
  const [openRegister, setOpenRegister] = useState(false);

  const handleClickOpenRegister = () => {
    setOpenRegister(true);
  };
  const handleClose = () => {
    setOpenRegister(false);
  };
  const setShowPassword = () => {
    setFormValue({ ...formValue, showPassword: !formValue.showPassword });
  };

  const submit = () => {
    dispatch(openLoading());
    let { email, password } = formValue;
    let error = [];
    if (!validateEmail(email)) {
      error.push({ msg: "Bạn cần nhập đúng email của công ty" });
    }
    if (email.trim() === "" || password.trim() === "") {
      error.push({ msg: "Bạn cần nhập đầy đủ thông tin" });
    }
    if (error.length > 0) {
      dispatch(closeLoading());
      error.forEach((e) => {
        enqueueSnackbar(e.msg, { variant: "error" });
      });
    } else {
      dispatch(
        login({
          data: { email, password },
          callbackSuccess: (data) => {
            enqueueSnackbar("Bạn đã đăng nhập thành công !", {
              variant: "success",
            });
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("token_type", data.token_type);
            localStorage.setItem("expires_at", data.expires_at);
            localStorage.setItem("name", data.name);
            localStorage.setItem("role", data.role);
            localStorage.setItem("department", data.department);
            localStorage.setItem("user_id", data.id);
            history.push("/");
            dispatch(closeLoading());
            return null;
          },
          callbackFail: () => {
            enqueueSnackbar("Tài khoản hoặc mật khẩu không chính xác", {
              variant: "error",
            });
            dispatch(closeLoading());
          },
        })
      );
    }
  };
  const submitByEnter = (e) => {
    if (e.key === "Enter") {
      submit();
    }
  };
  const responseGoogleSuccess = (response) => {
    dispatch(openLoading());
    dispatch(
      loginGoogle(
        { access_token: response.accessToken },
        (data) => {
          enqueueSnackbar("Bạn đã đăng nhập thành công !", {
            variant: "success",
          });
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("token_type", data.token_type);
          localStorage.setItem("name", data.name);
          localStorage.setItem("role", data.role);
          localStorage.setItem("department", data.department);
          localStorage.setItem("user_id", data.id);
          localStorage.setItem("email", data.email);
          history.push("/");
          dispatch(closeLoading());
          return null;
        },
        (data) => {
          dispatch(closeLoading());
          handleClickOpenRegister();
          setDataRegisterByGoogle(data);
        }
      )
    );
  };
  const responseGoogleFail = () => {
    enqueueSnackbar("Đã có lỗi sảy ra", { variant: "error" });
  };
  const submitRegisterByGoogle = () => {
    const dataSubmit = {
      ...dataRegisterByGoogle,
      department_id: formValue.departmentId,
    };
    dispatch(
      registerGoogle(
        dataSubmit,
        (data) => {
          enqueueSnackbar("Bạn đã đăng nhập thành công !", {
            variant: "success",
          });
          localStorage.setItem("access_token", data.access_token);
          localStorage.setItem("token_type", data.token_type);
          localStorage.setItem("expires_at", data.expires_at);
          localStorage.setItem("name", data.name);
          localStorage.setItem("role", data.role);
          localStorage.setItem("department", data.department);
          localStorage.setItem("user_id", data.id);
          history.push("/");
          dispatch(closeLoading());
        },
        () => {
          enqueueSnackbar("Đã có lỗi xảy ra!", {
            variant: "error",
          });
          dispatch(closeLoading());
        }
      )
    );
  };
  return (
    <LayoutLogin>
      <div className={classes.email}>
        <TextField
          value={formValue.email}
          onChange={handleChangeForm}
          name="email"
          label="Email"
          variant="outlined"
        />
      </div>
      <div className={classes.password}>
        <FormControl variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            name="password"
            id="outlined-adornment-password"
            type={formValue.showPassword ? "text" : "password"}
            value={formValue.password}
            onChange={handleChangeForm}
            onKeyPress={submitByEnter}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={setShowPassword}>
                  {formValue.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            labelWidth={70}
          />
        </FormControl>
      </div>
      <div className={classes.config}>
        <label>
          <input
            type="checkbox"
            onChange={handleChangeForm}
            name="rememberMe"
            value={formValue.rememberMe}
          />
          <span> Nhớ mật khẩu </span>
        </label>
        <span>
          <NavLink to="/forgot_password"> Quên mật khẩu </NavLink>
        </span>
      </div>
      <div className={classes.submit}>
        <Button variant="contained" color="primary" onClick={submit}>
          Đăng nhập
        </Button>

        <GoogleLogin
          clientId={CLIENT_ID}
          buttonText="Đăng nhập bằng google"
          onSuccess={responseGoogleSuccess}
          onFailure={responseGoogleFail}
        />
      </div>
      <Dialog onClose={handleClose} open={openRegister}>
        <RegisterByGoogle
          submitRegisterByGoogle={submitRegisterByGoogle}
          dataDepartment={dataDepartment}
          departmentId={formValue.departmentId}
          handleChangeForm={handleChangeForm}
        />
      </Dialog>
    </LayoutLogin>
  );
}

export default Login;
