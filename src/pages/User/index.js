import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import * as yup from "yup";
import { useStyles } from "./style";
import { TYPE_POPUP, ROLE } from "./../../constant";
import Popup from "./components/Popup";
import LayoutMain from "./../../layouts/LayoutMain";
import SearchPopup from "./../../components/SearchPopup";
import ListUser from "./components/ListUser";
import * as actionUser from "./../../store/action/user";
import { openLoading, closeLoading } from "./../../store/action/loading";
import {
  dataToParamAddUser,
  dataToParamUpdateUser,
  inforUserToData,
  validateEmail,
} from "../../helpers";
import { getDepartment } from "../../store/action/department";

const validationSchema = yup.object({
  email: yup
    .string("Enter your email")
    .email("Enter a valid email")
    .required("Email is required")
    .max(191, "Email không quá 191 kí tự"),
  name: yup
    .string()
    .required("Name is required")
    .max(191, "Name không quá 191 kí tự"),
});

function User() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const dataUser = useSelector((state) => state?.dataUser);
  const dataDepartment = useSelector((state) => state?.dataDepartment?.allData);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [typePopup, setTypePopup] = useState("");
  const [textFilter, setTextFilter] = useState("");

  const MANAGEMENT_ROOM_ID = 10;
  const ADMIN_ID = 1;

  useEffect(() => {
    fetchUser({ name: textFilter }, 1);
    dispatch(getDepartment());
    // eslint-disable-next-line
  }, []);
  const formik = useFormik({
    initialValues: {
      name: "",
      department: 1,
      role: ROLE.USER,
      status: "active",
      email: "",
      textFilter: "",
    },
    validate: (values) => {
      const errors = {};
      if (!validateEmail(values.email)) {
        errors.email = "Bạn cần nhập Email công ty";
      }

      if (
        parseInt(values.department) === MANAGEMENT_ROOM_ID &&
        parseInt(values.role) !== ADMIN_ID
      ) {
        errors.role = "Phòng ban chỉ dành cho admin";
      }
      if (
        parseInt(values.role) === ADMIN_ID &&
        parseInt(values.department) !== MANAGEMENT_ROOM_ID
      ) {
        errors.department = "Admin cần thuộc phòng quản lý";
      }
      return errors;
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(openLoading());
      if (typePopup === TYPE_POPUP.ADD) {
        const dataAddUser = dataToParamAddUser(values);
        dispatch(
          actionUser.addUser(
            dataAddUser,
            () => {
              enqueueSnackbar("Thêm user thành công !!", {
                variant: "success",
              });
              dispatch(closeLoading());
              setOpen(false);
            },
            (msg, errorsInForm) => {
              if (errorsInForm) formik.setErrors(errorsInForm);
              enqueueSnackbar(msg ? msg : "Đã có lỗi xảy ra", {
                variant: "error",
              });
              dispatch(closeLoading());
            }
          )
        );
      }
      if (typePopup === TYPE_POPUP.UPDATE) {
        const dataUpdateUser = dataToParamUpdateUser(values);
        dispatch(
          actionUser.updateUser(
            dataUpdateUser,
            () => {
              enqueueSnackbar("Update user thành công !!", {
                variant: "success",
              });
              dispatch(closeLoading());
              setOpen(false);
            },
            (msg, errorsInForm) => {
              if (errorsInForm) formik.setErrors(errorsInForm);
              enqueueSnackbar(msg ? msg : "Đã có lỗi xảy ra", {
                variant: "error",
              });
              dispatch(closeLoading());
            }
          )
        );
      }
    },
  });
  const fetchUser = (data, pagePrams) => {
    dispatch(openLoading());

    dispatch(
      actionUser.filterUser(
        {
          ...data,
          page: pagePrams,
        },
        () => {
          dispatch(closeLoading());
        },
        (e) => {
          dispatch(closeLoading());
          enqueueSnackbar(e ? e : "Có lỗi xảy ra !!!", { variant: "error" });
        }
      )
    );
  };
  const submitFormFilter = () => {
    fetchUser({ name: textFilter }, 1);
  };

  const handleChangeFormFilter = (e) => {
    setTextFilter(e.target.value);
    if (e.target.value === "") {
      fetchUser({ name: "" }, 1);
    }
  };
  const handleOpenPopup = (type, data) => () => {
    setTypePopup(type);
    setOpen(true);
    if (data && type === TYPE_POPUP.UPDATE) {
      formik.setValues(inforUserToData(data));
    } else {
      formik.resetForm();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePages = (event, value) => {
    setPage(value);
    fetchUser({ name: textFilter }, value);
  };
  return (
    <LayoutMain>
      <div className={classes.container}>
        <h1> List user </h1>
        <SearchPopup
          handleOpenPopup={handleOpenPopup(TYPE_POPUP.ADD)}
          textFilter={textFilter}
          handleChangeForm={handleChangeFormFilter}
          submitFormFilter={submitFormFilter}
          placeHolder="Tìm kiếm user ...."
        />
        <div>
          <ListUser
            data={dataUser.allData}
            handleOpenPopup={handleOpenPopup}
            handleChangePages={handleChangePages}
            page={page}
            countPages={dataUser.infoPage.last_page}
          />
        </div>
      </div>
      <Popup
        open={open}
        handleClose={handleClose}
        typePopup={typePopup}
        dataDepartment={dataDepartment}
        formik={formik}
      />
    </LayoutMain>
  );
}

export default User;
