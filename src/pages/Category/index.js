import React, { useEffect, useState } from "react";
import { useSnackbar } from "notistack";
import { useFormik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useStyles } from "./style";
import { TYPE_POPUP } from "./../../constant";
import Popup from "./components/Popup";
import LayoutMain from "./../../layouts/LayoutMain";
import SearchPopup from "./../../components/SearchPopup";
import ListCategory from "./components/ListCategory";
import * as actionCategory from "./../../store/action/category";
import { openLoading, closeLoading } from "./../../store/action/loading";
import {
  dataCategoryToDataForm,
  dataFormToParamsAddCategory,
} from "../../helpers";

const validationSchema = yup.object({
  assignee: yup.string().required("Assignee is required"),
  name: yup
    .string()
    .required("Name is required")
    .max(191, "Không vượt quá 191 kí tự"),
});

function Category() {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const dataCategory = useSelector((state) => state.dataCategory);
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [typePopup, setTypePopup] = useState("");
  const [textFilter, setTextFilter] = useState("");

  useEffect(() => {
    dispatch(actionCategory.fetchAllCategory(1, ""));
    dispatch(actionCategory.fetchAllAssignee());
  }, [dispatch]);
  const formik = useFormik({
    initialValues: {
      name: "",
      assignee: "",
      status: "enable",
      textFilter: "",
    },
    validationSchema,
    onSubmit: (values) => {
      dispatch(openLoading());
      if (typePopup === TYPE_POPUP.ADD) {
        const dataAddCategory = dataFormToParamsAddCategory(values);
        dispatch(
          actionCategory.addCategory(
            dataAddCategory,
            () => {
              enqueueSnackbar("Thêm category thành công !!", {
                variant: "success",
              });
              dispatch(closeLoading());
              setOpen(false);
            },
            (msg) => {
              enqueueSnackbar(msg ? msg : "Đã có lỗi xảy ra", {
                variant: "error",
              });
              dispatch(closeLoading());
            }
          )
        );
      }
      if (typePopup === TYPE_POPUP.UPDATE) {
        const dataUpdateUser = dataFormToParamsAddCategory(values);
        dispatch(
          actionCategory.updateCategory(
            dataUpdateUser,
            () => {
              enqueueSnackbar("Update category thành công !!", {
                variant: "success",
              });
              dispatch(closeLoading());
              setOpen(false);
            },
            (msg) => {
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
  const submitFormFilter = () => {
    dispatch(actionCategory.fetchAllCategory(1, textFilter));
  };

  const handleChangeFormFilter = (e) => {
    setTextFilter(e.target.value);
    if (e.target.value === "") {
      dispatch(actionCategory.fetchAllCategory(1, ""));
    }
  };
  const handleOpenPopup = (type, data) => () => {
    setTypePopup(type);
    setOpen(true);
    if (data && type === TYPE_POPUP.UPDATE) {
      formik.setValues(dataCategoryToDataForm(data));
    } else {
      formik.resetForm();
    }
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleChangePages = (event, value) => {
    setPage(value);
    dispatch(actionCategory.fetchAllCategory(value));
  };
  return (
    <LayoutMain>
      <div className={classes.container}>
        <h1> List category </h1>
        <SearchPopup
          handleOpenPopup={handleOpenPopup(TYPE_POPUP.ADD)}
          textFilter={textFilter}
          handleChangeForm={handleChangeFormFilter}
          submitFormFilter={submitFormFilter}
          placeHolder="Tìm kiếm category ...."
        />
        <div>
          <ListCategory
            data={dataCategory.allData}
            handleOpenPopup={handleOpenPopup}
            handleChangePages={handleChangePages}
            page={page}
            countPages={dataCategory.infoPage.last_page}
          />
        </div>
      </div>
      <Popup
        open={open}
        handleClose={handleClose}
        typePopup={typePopup}
        formik={formik}
        assignee={dataCategory.assignee}
      />
    </LayoutMain>
  );
}

export default Category;
