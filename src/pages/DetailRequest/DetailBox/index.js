import React from "react";
import { Skeleton } from "@material-ui/lab";
import DeleteIcon from "@material-ui/icons/Delete";
import ThumbDownAltRoundedIcon from "@material-ui/icons/ThumbDownAltRounded";
import { useHistory } from "react-router";
import ThumbUpRoundedIcon from "@material-ui/icons/ThumbUpRounded";
import EditIcon from "@material-ui/icons/Edit";
import { Avatar, Box, Button, Grid, Typography, Chip } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import CategoryRoundedIcon from "@material-ui/icons/CategoryRounded";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import KeyboardReturnIcon from "@material-ui/icons/KeyboardReturn";
import UpdatePopup from "../UpdatePopup";

import { urlAvatar } from "../data";
import userImg from "../../../assets/img/user.svg";

import { ROLE, STATUS_ADMIN, STATUS_PM } from "../../../constant";

const DetailBox = (props) => {
  const history = useHistory();
  const {
    handleReject,
    handleApprove,
    classes,
    request,
    formik,
    handleOpenConfirm,
    isConfirm,
    listAssign,
    isUpdate,
    update,
    handleCloseUpdate,
    handleCloseConfirm,
    handleDeleteConfirm,
  } = props;
  const handleComment = () => {
    const arrContent = request?.content?.split("\n");

    return arrContent?.map((content, index) => (
      <Typography component="p" key={index}>
        {content}
      </Typography>
    ));
  };
  const setColor = () => {
    return request?.status_admin === STATUS_ADMIN.open
      ? "primary"
      : request?.status_admin === STATUS_ADMIN.close
      ? "default"
      : "secondary";
  };
  return (
    <>
      <Grid container justify="space-between">
        {request.status_admin ? (
          <Chip
            icon={<StarIcon className={classes.iconDetail} />}
            label={request.status_admin}
            className={classes.statusLabel}
            color={setColor()}
          />
        ) : (
          <Skeleton
            variant="text"
            className={classes.statusLabel}
            width="124px"
            height="32px"
          />
        )}
        <Grid item>
          <Button variant="contained" onClick={() => history.push("/")}>
            <KeyboardReturnIcon />
            Return
          </Button>
          {request.author_id === parseInt(localStorage.getItem("user_id")) &&
          request.status_admin === STATUS_ADMIN.open ? (
            <Button
              variant="contained"
              onClick={handleOpenConfirm}
              className={classes.redBtn}
            >
              <DeleteIcon />
              Delete
            </Button>
          ) : null}
          {parseInt(localStorage.getItem("role")) === ROLE.PM &&
          request.status_admin === STATUS_ADMIN.open &&
          request.status_manager === STATUS_PM.open &&
          parseInt(localStorage.getItem("department")) ===
            request.department_id ? (
            <Button className={classes.redBtn} onClick={handleReject}>
              <ThumbDownAltRoundedIcon />
              Reject
            </Button>
          ) : null}
          {parseInt(localStorage.getItem("role")) === ROLE.PM &&
          request.status_admin === STATUS_ADMIN.open &&
          request.status_manager === STATUS_PM.open &&
          parseInt(localStorage.getItem("department")) ===
            request.department_id ? (
            <Button className={classes.blueBtn} onClick={handleApprove}>
              <ThumbUpRoundedIcon />
              Approve
            </Button>
          ) : null}
          {(request.author === localStorage.getItem("name") ||
            parseInt(localStorage.getItem("role")) === ROLE.ADMIN) &&
          request.status_admin === STATUS_ADMIN.open ? (
            <Button
              variant="contained"
              color="primary"
              className={classes.btnNormal}
              onClick={update}
            >
              <EditIcon />
              Update
            </Button>
          ) : null}
        </Grid>
      </Grid>
      {request.title ? (
        <Typography className={classes.heading} component="p">
          {request.title}
        </Typography>
      ) : (
        <Skeleton variant="text" width="1047px" height="38px" />
      )}
      <Grid container item xs={6} alignItems="center">
        {request?.author ? (
          <Avatar className={classes.avatar} src={userImg} />
        ) : (
          <Skeleton
            className={classes.avatar}
            variant="circle"
            width={60}
            height={60}
          />
        )}

        <Box>
          <Typography component="div" className={classes.nameUser}>
            {request?.author ? (
              request.author
            ) : (
              <Skeleton width={60} height={20} />
            )}
          </Typography>
          {request?.due_date ? (
            <Typography component="span" className={classes.create}>
              Due date :
              <Typography component="small">
                {request?.due_date?.split(" ")[0]}
              </Typography>
            </Typography>
          ) : (
            <Skeleton width={121} height={15} />
          )}
        </Box>
      </Grid>
      <Box my={2}>
        <Typography component="div" className={classes.description}>
          {handleComment()}
        </Typography>
      </Box>
      <Grid container spacing={1} justify="space-between">
        <Grid container item xs={5} alignItems="center">
          <CategoryRoundedIcon />
          <Typography component="p" className={classes.gridItem}>
            Category :
          </Typography>
          <Typography component="span">
            {request?.category ? (
              request.category
            ) : (
              <Skeleton height={32} width={100} />
            )}
          </Typography>
        </Grid>
        <Grid container item xs={5} alignItems="center">
          <AssignmentIndOutlinedIcon />
          <Typography component="p" className={classes.gridItem}>
            Assign :
          </Typography>
          <Typography component="a" className={classes.assignee}>
            {request?.assign ? (
              <Chip
                avatar={
                  <Avatar
                    className={classes.avatarAssign}
                    variant="circle"
                    src={urlAvatar}
                  />
                }
                label={request?.assign}
                color="primary"
                size="medium"
              />
            ) : (
              <Skeleton width={90} height={30} />
            )}
          </Typography>
        </Grid>
      </Grid>
      <UpdatePopup
        formik={formik}
        isUpdate={isUpdate}
        category={formik.values.category}
        handleCloseUpdate={handleCloseUpdate}
        listAssign={listAssign}
      />
      <Dialog
        open={isConfirm}
        onClose={handleCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure delete this request ?
        </DialogTitle>
        <DialogActions>
          <Button
            onClick={handleCloseConfirm}
            variant="outlined"
            color="primary"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteConfirm}
            color="primary"
            variant="contained"
            autoFocus
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default DetailBox;
