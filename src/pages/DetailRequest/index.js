import React, { useEffect, useState } from "react";
import { Box } from "@material-ui/core";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { useSnackbar } from "notistack";
import { useHistory } from "react-router-dom";

import LayoutMain from "./../../layouts/LayoutMain";
import styles from "./styles";
import DetailBox from "./DetailBox";
import CommentBox from "./CommentBox";
import {
  deleteRequest,
  fetchRequestDetail,
  updateRequest,
} from "../../store/action/request";
import {
  fetchComments,
  postComment,
  refreshComment,
} from "../../store/action/comment";
import { fetchCategoryList } from "../../store/action/category";
import { fetchAssign } from "../../store/action/assign";

import { ALL_LINK, ROLE, STATUS_ADMIN, STATUS_PM } from "../../constant";

function DetailRequest(props) {
  const history = useHistory();
  const [isConfirm, setConfirm] = useState(false);
  const [isUpdate, setUpdate] = useState(false);
  const [listAssign, setListAssign] = useState([]);
  const classes = styles();
  const params = useParams();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const [page, setPage] = useState(1);
  const request = useSelector((state) => state?.dataRequest?.requestDetail);
  const commentData = useSelector((state) => state?.dataRequest?.dataComment);
  const listAssignStore = useSelector(
    (state) => state?.dataRequest?.listAssign
  );

  const comments = useSelector((state) => state?.dataRequest?.listComment);
  useEffect(() => {
    dispatch(refreshComment());
  }, [dispatch]);
  useEffect(() => {
    dispatch(fetchRequestDetail(params.id));
    dispatch(fetchComments({ id: params.id, page }));
    dispatch(fetchCategoryList());
    dispatch(fetchAssign());
  }, [dispatch, params, page]);
  const handlePostComment = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      if (e.target.value) {
        const data = {
          id: params.id,
          content: e.target.value.trim(),
          page: page,
        };
        dispatch(
          postComment(data, (message, variant) =>
            enqueueSnackbar(message, variant)
          )
        );
        e.target.value = "";
      }
    }
  };

  useEffect(() => {
    setListAssign(listAssignStore.filter((m) => m.id === request.assign_id));
  }, [listAssignStore, request.assign_id]);

  const callbackFailed = (error) => {
    const objectError = error.message;
    const message = (key, mess) => {
      if (key === "due_date") {
        const arrMess = mess.split(" ");
        arrMess.pop();
        return arrMess.join(" ");
      }
      return mess;
    };
    for (let key in objectError) {
      formik.setErrors({
        ...formik.errors,
        [key]: message(key, objectError[key][0]),
      });
    }
  };

  const callbackSuccess = (mess, variant) => {
    history.push(ALL_LINK.HOME);
    dispatch(refreshComment());
    dispatch(fetchComments({ id: params.id, page: 1 }));
    dispatch(fetchRequestDetail(params.id));
    enqueueSnackbar(mess, variant);
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      ...request,
      admin_id: request.assign_id,
      category_id: request.category_id,
      status_admin: request.status_admin,
      priority: request.priority,
      category: request.category,
    },
    onSubmit: (values) => {
      dispatch(
        updateRequest(
          { dataForm: values, id: params.id },
          callbackSuccess,
          callbackFailed
        )
      );
    },
  });
  const handleOpenConfirm = () => {
    setConfirm(true);
  };

  const handleCloseConfirm = () => {
    setConfirm(false);
  };
  const update = () => {
    if (
      parseInt(localStorage.getItem("role")) === ROLE.USER ||
      parseInt(localStorage.getItem("user_id")) === request.author_id
    ) {
      history.push(ALL_LINK.UPDATE_REQUEST + `/${params.id}`);
    } else {
      setUpdate(true);
      formik.resetForm();
    }
  };
  const handleCloseUpdate = () => {
    setUpdate(false);
  };
  const onScroll = (e) => {
    const lastPage = commentData.last_page;
    const element = e.target;
    if (element.scrollTop === 0 && page < lastPage) {
      dispatch(fetchComments({ id: params.id, page }));
      setPage(page + 1);
    }
  };
  const handleDeleteConfirm = () => {
    setConfirm(false);
    dispatch(
      deleteRequest(params.id, (mess, variant) => {
        enqueueSnackbar(mess, variant);
        history.push(ALL_LINK.HOME);
      })
    );
  };
  const handleReject = () => {
    formik.setFieldValue("status_manager", STATUS_PM.reject);
    formik.setFieldValue("status_admin", STATUS_ADMIN.close);
    formik.handleSubmit();
  };
  const handleApprove = () => {
    formik.setFieldValue("status_manager", STATUS_PM.approve);
    formik.handleSubmit();
  };
  return (
    <LayoutMain>
      <Box paddingX={8} paddingY={4} className={classes.box}>
        <DetailBox
          handleReject={handleReject}
          handleApprove={handleApprove}
          handleDeleteConfirm={handleDeleteConfirm}
          handleOpenConfirm={handleOpenConfirm}
          formik={formik}
          classes={classes}
          isConfirm={isConfirm}
          request={request}
          listAssign={listAssign}
          isUpdate={isUpdate}
          update={update}
          handleCloseUpdate={handleCloseUpdate}
          handleCloseConfirm={handleCloseConfirm}
        />
        <CommentBox
          current={commentData?.to}
          total={commentData?.total}
          onScroll={onScroll}
          comments={comments}
          classes={classes}
          handlePostComment={handlePostComment}
        />
      </Box>
    </LayoutMain>
  );
}

export default DetailRequest;
