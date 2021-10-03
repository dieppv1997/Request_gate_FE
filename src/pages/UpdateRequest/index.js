import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { useParams } from "react-router";
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Autocomplete from "@material-ui/lab/Autocomplete";

import { useSnackbar } from "notistack";
import UpdateIcon from "@material-ui/icons/Update";
import { useFormik } from "formik";
import * as Yup from "yup";

import LayoutMain from "../../layouts/LayoutMain";
import styles from "./style";
import { fetchRequestDetail, updateRequest } from "../../store/action/request";
import { fetchAssign } from "../../store/action/assign";
import { fetchCategoryList } from "../../store/action/category";
import { ALL_LINK, LIST_PRIORITY } from "../../constant";
import { useHistory } from "react-router-dom";

export default function UpdateRequest(props) {
  const params = useParams();
  const history = useHistory();
  const classes = styles();
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();

  const [dataPage, setDataPage] = useState({
    assign: { id: "", name: "" },
    category: { id: "", name: "" },
    listCategory: [],
    listAssign: [],
  });

  const detail = useSelector((state) => state.dataRequest.requestDetail);
  const listCategoryStore = useSelector(
    (state) => state?.dataRequest?.categoryList
  );
  const listAssignStore = useSelector(
    (state) => state?.dataRequest?.listAssign
  );
  const validateSchema = Yup.object().shape({
    title: Yup.string()
      .required("This field is required !")
      .min(6, "Title must be more than 6 characters !")
      .max(190, "Title no longer than 190 characters !"),
    content: Yup.string()
      .required("This field is required !")
      .min(10, "Description must be more than 6 characters !"),
    assign_id: Yup.string().required("This field is required !"),
    category_id: Yup.string().required("This field is required !"),
    priority: Yup.string().required("This field is required !"),
    due_date: Yup.string().required("This field is required !"),
  });
  useEffect(() => {
    dispatch(fetchRequestDetail(params.id));
    dispatch(fetchCategoryList());
    dispatch(fetchAssign());
  }, [dispatch, params.id]);
  const dateTime = (dateTime) => {
    return dateTime?.split(" ")[0];
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      status_admin: detail?.status_admin || "",
      status_manager: detail?.status_manager || "",
      category_id: detail?.category_id || "",
      assign_id: detail?.assign_id || "",
      priority: detail?.priority || "",
      due_date: dateTime(detail?.due_date) || 0,
      title: detail?.title || "",
      content: detail?.content || "",
    },
    onSubmit: (values, { setErrors }, errors) => {
      const {
        title,
        category_id,
        content,
        due_date,
        priority,
        assign_id,
        status_admin,
        status_manager,
      } = values;
      const data = {
        dataForm: {
          admin_id: assign_id,
          category_id,
          content,
          due_date,
          priority,
          status_admin,
          status_manager,
          title,
        },
        id: params.id,
      };
      dispatch(
        updateRequest(
          data,
          (mess, variant) => {
            enqueueSnackbar(mess, variant);
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
    validationSchema: validateSchema,
  });
  useEffect(() => {
    const assignee = listAssignStore?.find(
      (m) => m?.id === formik.values.assign_id
    );
    const category = listCategoryStore?.find(
      (m) => m?.id === formik.values.category_id
    );
    setDataPage((prev) => {
      return { ...prev, assign: assignee, category: category };
    });
  }, [
    formik.values.assign_id,
    formik.values.category_id,
    listCategoryStore,
    listAssignStore,
  ]);
  const listAssignAll = useCallback(() => {
    setDataPage((prev) => {
      return { ...prev, listAssign: listAssignStore };
    });
  }, [listAssignStore]);

  const listAssignByCategory = useCallback(() => {
    setDataPage((prev) => {
      return {
        ...prev,
        listAssign: listAssignStore?.filter(
          (m) =>
            m?.id ===
            listCategoryStore.find((m) => m?.id === dataPage?.category?.id)
              ?.user_id
        ),
      };
    });
  }, [dataPage?.category?.id, listAssignStore, listCategoryStore]);

  useEffect(() => {
    formik.values.category_id === "" ? listAssignAll() : listAssignByCategory();
  }, [formik.values.category_id, listAssignAll, listAssignByCategory]);

  const listCatAll = useCallback(() => {
    setDataPage((prev) => {
      return { ...prev, listCategory: listCategoryStore };
    });
  }, [listCategoryStore]);
  const listCatByAssign = useCallback(() => {
    setDataPage((prev) => {
      return {
        ...prev,
        listCategory: listCategoryStore?.filter(
          (m) =>
            m.user_id ===
            listAssignStore?.find((m) => m?.id === dataPage?.assign?.id)?.id
        ),
      };
    });
  }, [dataPage?.assign?.id, listAssignStore, listCategoryStore]);

  useEffect(() => {
    formik.values.assign_id === "" ? listCatAll() : listCatByAssign();
  }, [listCatByAssign, formik.values.assign_id, listCatAll]);
  return (
    <LayoutMain>
      <Box component="div" className={classes.container}>
        <Box paddingX={8} paddingY={6} className={classes.box}>
          <Grid
            container
            justify="space-between"
            className={classes.headingBox}
            alignItems="center"
          >
            <Typography className={classes.heading} component="h1">
              Update Request
            </Typography>
            <Button
              variant="contained"
              type="Submit"
              color="primary"
              className={classes.button}
              onClick={formik.handleSubmit}
            >
              <UpdateIcon className={classes.icon} />
              Update
            </Button>
          </Grid>
          <Box className={classes.boxRelative}>
            <TextField
              variant="outlined"
              placeholder="Title"
              name="title"
              value={formik.values.title}
              onChange={formik.handleChange}
              fullWidth
            />
            {formik.errors.title && formik.touched.title ? (
              <Typography component="p" className={classes.errorContent}>
                {formik.errors.title}
              </Typography>
            ) : null}
          </Box>
          <Box p={4} mt={2} className={classes.detail}>
            <Grid container>
              <Grid item xs={12} className={classes.boxRelative}>
                <TextField
                  multiline
                  variant="outlined"
                  fullWidth
                  name="content"
                  onChange={formik.handleChange}
                  placeholder="Add a description"
                  value={formik.values.content}
                  rows={6}
                />

                {formik.errors.content && formik.touched.content ? (
                  <Typography component="p" className={classes.errorContent}>
                    {formik.errors.content}
                  </Typography>
                ) : null}
              </Grid>
              <Grid container item xs={12} className={classes.item} spacing={5}>
                <Grid
                  container
                  item
                  lg={4}
                  md={6}
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography component="p" className={classes.itemTitle}>
                    Category :
                  </Typography>
                  <Box className={classes.boxRelative}>
                    <Autocomplete
                      onChange={(_e, value) => {
                        formik.setFieldValue(
                          "category_id",
                          (value && value.id) || ""
                        );
                      }}
                      value={dataPage.category}
                      getOptionLabel={(option) => option.name}
                      options={dataPage.listCategory}
                      className={classes.itemInput}
                      getOptionDisabled={(option) =>
                        option.status === "disable"
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Category"
                          variant="outlined"
                        />
                      )}
                    />
                    {formik.errors.category_id && formik.touched.category_id ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {formik.errors.category_id}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  lg={4}
                  md={6}
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography component="p" className={classes.itemTitle}>
                    Assign :
                  </Typography>
                  <Box className={classes.boxRelative}>
                    <Autocomplete
                      onChange={(_e, value) => {
                        formik.setFieldValue(
                          "assign_id",
                          (value && value.id) || ""
                        );
                      }}
                      value={dataPage.assign}
                      getOptionLabel={(option) => option.name}
                      options={dataPage.listAssign}
                      className={classes.itemInput}
                      getOptionDisabled={(option) =>
                        option.status === "disable"
                      }
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          placeholder="Assign"
                          variant="outlined"
                        />
                      )}
                    />
                    {formik.errors.assign_id && formik.touched.assign_id ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {formik.errors.assign_id}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  lg={4}
                  md={6}
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography component="p" className={classes.itemTitle}>
                    Priority :
                  </Typography>
                  <Box className={classes.boxRelative}>
                    <Autocomplete
                      name="priority"
                      error={Boolean(
                        formik.errors.priority && formik.touched.priority
                      )}
                      onChange={(_e, value) =>
                        formik.setFieldValue("priority", (value && value) || "")
                      }
                      className={classes.itemInput}
                      value={formik.values.priority}
                      placeholder="Priority"
                      options={LIST_PRIORITY}
                      getOptionLabel={(option) => option}
                      renderInput={(params) => (
                        <TextField
                          placeholder="Assign"
                          error={Boolean(
                            formik.errors.priority && formik.touched.priority
                          )}
                          {...params}
                          variant="outlined"
                        />
                      )}
                    />
                    {formik.errors.priority && formik.touched.priority ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {formik.errors.priority}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
                <Grid
                  container
                  item
                  lg={4}
                  md={6}
                  alignItems="center"
                  justify="space-between"
                >
                  <Typography component="p" className={classes.itemTitle}>
                    Due date :
                  </Typography>
                  <Box className={classes.boxRelative}>
                    <TextField
                      type="date"
                      variant="outlined"
                      name="due_date"
                      value={formik.values.due_date}
                      onChange={formik.handleChange}
                      className={classes.itemInput}
                    />
                    {formik.errors.due_date && formik.touched.due_date ? (
                      <Typography
                        component="p"
                        className={classes.errorContent}
                      >
                        {formik.errors.due_date}
                      </Typography>
                    ) : null}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </LayoutMain>
  );
}
