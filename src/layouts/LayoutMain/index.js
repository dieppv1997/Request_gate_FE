import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import { AppBar } from "@material-ui/core";
import { useHistory } from "react-router";
import Header from "./components/Header";
import Popup from "./components/Popup";
import { useStyles } from "./style";
import SideBar from "./components/SideBar";
import { toggleDrawer } from "../../store/action/drawer";
import { ALL_LINK } from "./../../constant";
import { inforUserToData } from "./../../helpers";
import { TYPE_POPUP_IN_LAYOUT_MAIN, ROLE } from "./../../constant";
import { actionLogoutAll } from "../../store/action/user";

export default function LayoutMain(props) {
  const history = useHistory();
  const classes = useStyles();
  const dispatch = useDispatch();
  const open = useSelector((state) => state.drawerOpen.drawerOpen);
  const dataDepartment = useSelector((state) => state.dataDepartment);
  const [openPopup, setOpenPopup] = useState(false);
  const myProfile = useSelector((state) => state.dataUser.me);
  const [typePopup, setTypePopup] = useState("");
  const handleToggle = () => {
    dispatch(toggleDrawer());
  };
  const formik = useFormik({
    initialValues: {
      name: "",
      department: 1,
      role: ROLE.USER,
      status: "active",
      email: "",
      textFilter: "",
    },
    onSubmit: (values) => {},
  });
  const logout = () => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch(actionLogoutAll());
    history.push(ALL_LINK.LOGIN);
  };
  const handleOpenPopup = (type) => () => {
    setTypePopup(type);
    setOpenPopup(true);
    if (type === TYPE_POPUP_IN_LAYOUT_MAIN.MY_PROFILE) {
      formik.setValues(inforUserToData(myProfile));
    } else {
      formik.resetForm();
    }
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Header
          myProfile={myProfile}
          handleOpenPopup={handleOpenPopup}
          classes={classes}
          handleToggle={handleToggle}
          logout={logout}
        />
      </AppBar>
      <SideBar classes={classes} open={open} />
      <main className={classes.main}>
        <div className={classes.toolbar} />
        <div className={classes.content}>{props.children}</div>
      </main>
      <Popup
        open={openPopup}
        handleClose={handleClose}
        typePopup={typePopup}
        formik={formik}
        dataDepartment={dataDepartment}
      />
    </div>
  );
}
