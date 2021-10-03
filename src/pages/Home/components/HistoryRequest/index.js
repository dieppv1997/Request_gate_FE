import React from "react";
import { NavLink } from "react-router-dom";
import Pagination from "@material-ui/lab/Pagination";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from "@material-ui/core";
import { useStyles } from "./style";

export default function HistoryRequest({
  dataListHistoryRequest,
  handleChange,
  page,
}) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <h1> History Request </h1>
      <div className={classes.content}>
        {dataListHistoryRequest?.data?.map((e) => {
          let content = JSON.parse(e.content);
          return (
            <div key={e.id} className={classes.item}>
              <List className={classes.rootList} disablePadding>
                <ListItem>
                  <ListItemAvatar>
                    <Avatar className={classes.avatarItem}>
                      {e?.user_update?.name.slice(0, 1)}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={e?.user_update?.name}
                    secondary={e?.created_at}
                  />
                </ListItem>
              </List>
              <div className={classes.itemLinkRequest}>
                <span> Update : </span>
                <NavLink
                  exact
                  to={`/detail_request/${e.request_id}`}
                  className={classes.linkRequest}
                >
                  {e?.title}
                </NavLink>
              </div>
              <table className={classes.contentItem}>
                <tbody>
                  {content?.category ? (
                    <tr>
                      <td>Category </td>
                      <td>
                        <p> : [ {content?.category?.new} ] </p>
                      </td>
                    </tr>
                  ) : null}

                  {content?.content ? (
                    <tr>
                      <td>content </td>
                      <td>
                        <p> : {content?.content?.new} </p>
                      </td>
                    </tr>
                  ) : null}

                  {content?.due_date ? (
                    <tr>
                      <td>due_date </td>
                      <td>
                        <p> : {content?.due_date?.new} </p>
                      </td>
                    </tr>
                  ) : null}

                  {content?.admin_id ? (
                    <div>
                      <td> Assignee </td>
                      <td>
                        <p> : {content?.admin_id?.new} </p>
                      </td>
                    </div>
                  ) : null}

                  {content?.status_admin ? (
                    <tr>
                      <td>Status admin </td>
                      <td>
                        <p> : {content?.status_admin?.new}</p>
                      </td>
                    </tr>
                  ) : null}

                  {content?.title ? (
                    <tr>
                      <td> Name </td>
                      <td>
                        <p> : {content?.title?.new}</p>
                      </td>
                    </tr>
                  ) : null}

                  {content?.priority ? (
                    <tr>
                      <td> Priority </td>
                      <td>
                        <p> : {content?.priority?.new}</p>
                      </td>
                    </tr>
                  ) : null}
                </tbody>
              </table>
            </div>
          );
        })}
      </div>

      <div className={classes.pagination}>
        <Pagination
          count={dataListHistoryRequest.last_page}
          page={page}
          color="primary"
          onChange={handleChange}
          siblingCount={0}
        />
      </div>
    </div>
  );
}
