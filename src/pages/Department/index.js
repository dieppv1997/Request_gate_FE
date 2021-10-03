import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  createDepartment,
  editDepartment,
  fetchDepartments,
  filterDepartment,
} from "../../store/action/department";
import DepartmentBox from "./DepartmentBox";
import { styles } from "./style";
import Popup from "./Popup";
import { TYPE_POPUP } from "../../constant";

const Department = (props) => {
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [row, setRow] = useState(0);
  const [typePopup, setTypePopup] = useState("");
  const [open, setOpen] = useState(false);
  const [initialVal, setInitialVal] = useState({ name: "" });
  const department = useSelector((state) => state?.dataDepartment?.data);
  const departments = useSelector((state) => state?.dataDepartment?.list);
  const dispatch = useDispatch();
  const handleChangePage = (_e, value) => {
    setPage(value);
  };
  useEffect(() => {
    setInitialVal({ name: row?.name });
  }, [row?.name]);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialVal || { name: "" },
    validationSchema: Yup.object().shape({
      name: Yup.string()
        .required("This field is required !!!")
        .min(3, "length of this field is longer than 3")
        .max(191, "Length of this field is no longer than 191"),
    }),
    onSubmit: (values, resetForm) => {
      if (typePopup === TYPE_POPUP.ADD) {
        dispatch(
          createDepartment(values.name, (mess, variant) => {
            enqueueSnackbar(mess, variant);
            dispatch(fetchDepartments(page));
            if (variant.variant === "success") {
              handleClosePopup();
            }
          })
        );
      } else {
        const body = {
          id: row?.id,
          name: values.name,
        };
        dispatch(
          editDepartment(
            body,
            (mess, variant) => {
              enqueueSnackbar(mess, variant);
              dispatch(fetchDepartments(page));
              handleClosePopup();
            },
            (mess, variant) => enqueueSnackbar(mess, variant)
          )
        );
      }
    },
  });
  const handleClosePopup = () => {
    setOpen(false);
    setRow("");
    formik.resetForm();
  };
  const handleOpenPopup = (type, department) => {
    setOpen(true);
    setTypePopup(type);
    if (department) {
      setRow(department);
    }
  };

  const handleFilter = (e) => {
    setQuery(e.target.value);
  };
  useEffect(() => {
    dispatch(filterDepartment(query, () => setPage(1)));
  }, [dispatch, query]);
  useEffect(() => {
    dispatch(fetchDepartments(page));
  }, [dispatch, page]);
  return (
    <>
      <DepartmentBox
        handleFilter={handleFilter}
        handleClickOpen={handleOpenPopup}
        handleChangePage={handleChangePage}
        department={department}
        departments={departments}
        classes={classes}
      />
      <Popup
        formik={formik}
        open={open}
        handleClosePopup={handleClosePopup}
        typePopup={typePopup}
        handleOpenPopup={handleOpenPopup}
      />
    </>
  );
};

export default Department;
