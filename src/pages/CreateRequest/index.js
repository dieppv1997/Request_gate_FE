import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useHistory } from "react-router-dom";

import Request from "./Request";
import { fetchAssign } from "../../store/action/assign";
import { fetchCategoryList } from "../../store/action/category";
import { addRequest } from "../../store/action/request";
import { ALL_LINK } from "../../constant";
export default function CreateRequest() {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const history = useHistory();

  const [dataPage, setDataPage] = useState({
    listAssign: [],
    listCategory: [],
    assignee: { id: null, name: "" },
    category: { id: null, name: "" },
  });
  const listCategoryStore = useSelector(
    (state) => state?.dataRequest?.categoryList
  );
  const listAssignStore = useSelector(
    (state) => state?.dataRequest?.listAssign
  );
  const CreateSchema = Yup.object().shape({
    admin_id: Yup.string().required("This field is required"),
    category_id: Yup.number().required("This field is required"),
    content: Yup.string()
      .min(10, "Length of description longer than 10")
      .required("This field is required"),
    priority: Yup.string().required("This field is required"),
    title: Yup.string()
      .required("This field is required")
      .min(5, "Length of title longer than 3")
      .max(190, "Length of title no longer than 190"),
    due_date: Yup.string().required("This field is required"),
  });

  useEffect(() => {
    dispatch(fetchCategoryList());
    dispatch(fetchAssign());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      category_id: "",
      content: "",
      title: "",
      due_date: "",
      admin_id: "",
      priority: "",
    },

    validationSchema: CreateSchema,
    onSubmit: (values, { setErrors }, errors) => {
      dispatch(
        addRequest(
          values,
          () => {
            enqueueSnackbar("Add success", { variant: "success" });
            formik.resetForm();
            history.push(ALL_LINK.HOME);
          },
          (error) => {
            const listError = error.message.due_date[0].split(" ");
            listError.pop();
            setErrors({ ...errors, due_date: listError.join(" ") });
          }
        )
      );
    },
  });
  useEffect(() => {
    const assignee = listAssignStore?.find(
      (m) => m.id === formik.values.admin_id
    );
    const category = listCategoryStore?.find(
      (m) => m.id === formik.values.category_id
    );
    setDataPage((prev) => {
      return { ...prev, category, assignee };
    });
  }, [
    formik.values.admin_id,
    formik.values.category_id,
    listAssignStore,
    listCategoryStore,
  ]);

  const setCategoryAll = useCallback(() => {
    setDataPage((prev) => {
      return { ...prev, listCategory: listCategoryStore };
    });
  }, [listCategoryStore]);

  const listCatByAssign = useCallback(() => {
    setDataPage((prev) => {
      return {
        ...prev,
        listCategory: listCategoryStore.filter(
          (m) =>
            m?.user_id ===
            listAssignStore.find((m) => m?.id === formik.values.admin_id)?.id
        ),
      };
    });
  }, [formik.values.admin_id, listAssignStore, listCategoryStore]);

  useEffect(() => {
    formik.values.admin_id === "" ? setCategoryAll() : listCatByAssign();
  }, [formik.values.admin_id, setCategoryAll, listCatByAssign]);

  const listAssignAll = useCallback(() => {
    setDataPage((prev) => {
      return { ...prev, listAssign: listAssignStore };
    });
  }, [listAssignStore]);

  const listAssignByCategory = useCallback(() => {
    setDataPage((prev) => {
      return {
        ...prev,
        listAssign: listAssignStore.filter(
          (m) =>
            m?.id ===
            listCategoryStore.find((m) => m?.id === formik.values.category_id)
              ?.user_id
        ),
      };
    });
  }, [formik.values.category_id, listCategoryStore, listAssignStore]);

  useEffect(() => {
    formik.values.category_id === "" ? listAssignAll() : listAssignByCategory();
  }, [formik.values.category_id, listAssignAll, listAssignByCategory]);
  return (
    <Request
      formik={formik}
      assignee={dataPage.assignee}
      category={dataPage.category}
      listCategory={dataPage.listCategory}
      listAssign={dataPage.listAssign}
    />
  );
}
