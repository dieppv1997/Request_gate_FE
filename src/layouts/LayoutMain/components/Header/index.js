import { Button, IconButton, Toolbar, Menu, MenuItem } from "@material-ui/core";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import MenuIcon from "@material-ui/icons/Menu";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import React from "react";
import { GoogleLogout } from "react-google-login";
import logo from "../../../../assets/img/logoHblab.png";
import { TYPE_POPUP_IN_LAYOUT_MAIN, CLIENT_ID } from "../../../../constant";

export default function Header({
  classes,
  handleToggle,
  logout,
  handleOpenPopup,
}) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={handleToggle}
        edge="start"
        className={classes.menuButton}
      >
        <MenuIcon />
      </IconButton>
      <Button>
        <img alt="logo" src={logo} className={classes.logoBtn}></img>
      </Button>
      <div className={classes.infor}>
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          className={classes.colorWhite}
        >
          <AccountCircleRoundedIcon /> <ArrowDropDownIcon />
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
          variant="menu"
        >
          <MenuItem
            onClick={handleOpenPopup(TYPE_POPUP_IN_LAYOUT_MAIN.MY_PROFILE)}
          >
            Profile
          </MenuItem>
          <MenuItem
            onClick={handleOpenPopup(TYPE_POPUP_IN_LAYOUT_MAIN.CHANGE_PASSWORD)}
          >
            Đổi mật khẩu
          </MenuItem>
          <MenuItem onClick={logout}>
            <GoogleLogout
              clientId={CLIENT_ID}
              render={(renderProps) => (
                <span
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  Logout
                </span>
              )}
            />
          </MenuItem>
        </Menu>
      </div>
    </Toolbar>
  );
}
