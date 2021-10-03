import Tooltip from "@material-ui/core/Tooltip";
import { NavLink } from "react-router-dom";
import { ListItemIcon, ListItemText, ListItem } from "@material-ui/core";

function LinkMenu(props) {
  return (
    <Tooltip title={props.title} placement="right" arrow>
      <NavLink
        exact
        to={props.link}
        activeClassName={props.active}
        className={props.navLink}
      >
        <ListItem>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.title} />
        </ListItem>
      </NavLink>
    </Tooltip>
  );
}

export default LinkMenu;
