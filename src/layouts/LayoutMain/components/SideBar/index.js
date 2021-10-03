import React from "react";
import { Drawer, List } from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import MeetingRoomRoundedIcon from "@material-ui/icons/MeetingRoomRounded";
import CategoryIcon from "@material-ui/icons/Category";
import clsx from "clsx";
import { useHistory } from "react-router-dom";
import { ALL_LINK, LIST_MENU, ROLE } from "../../../../constant/index";
import LinkMenu from "./../../../../components/LinkMenu";

export default function SideBar(props) {
  const history = useHistory();
  const { classes, open } = props;
  return (
    <Drawer
      variant="permanent"
      className={clsx(
        classes.drawer,
        history.location.pathname === ALL_LINK.HOME ? classes.inPageHome : null,
        {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }
      )}
      classes={{
        paper: clsx({
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        }),
      }}
    >
      <div className={classes.toolbar}></div>
      <List className={classes.navList}>
        {LIST_MENU.map((element) => (
          <LinkMenu
            key={element.title}
            title={element.title}
            link={element.link}
            active={classes.active}
            navLink={clsx(
              classes.navLink,
              element.link === ALL_LINK.HISTORY_REQUEST
                ? classes.linkHistoryRequest
                : null
            )}
            icon={element.icon}
          />
        ))}
        {parseInt(localStorage.getItem("role")) === ROLE.ADMIN && (
          <>
            <LinkMenu
              title="User"
              link={ALL_LINK.USER}
              active={classes.active}
              navLink={classes.navLink}
              icon={<PersonIcon />}
            />
            <LinkMenu
              title="Category"
              link={ALL_LINK.CATEGORY}
              active={classes.active}
              navLink={classes.navLink}
              icon={<CategoryIcon />}
            />
            <LinkMenu
              title="Department"
              link={ALL_LINK.DEPARTMENT}
              active={classes.active}
              navLink={classes.navLink}
              icon={<MeetingRoomRoundedIcon />}
            />
          </>
        )}
      </List>
    </Drawer>
  );
}
