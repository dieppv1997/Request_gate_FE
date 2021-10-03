import React from "react";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import userImg from "../../../assets/img/user.svg";
import styles from "../styles";

function CommentItem(props) {
  const classes = styles();
  const { comment } = props;
  const content = () => {
    if (typeof comment.content === "object") {
      let htmls = [];
      let index = 0;
      for (let obj in comment.content) {
        const object = comment.content[obj];
        htmls.push(
          <li key={`${comment.id}_${index}`}>
            <Typography component="p" className={classes.wordBreak}>
              {obj.split("_").join(" ")}: {object.old + "  ➥  " + object.new}
            </Typography>
          </li>
        );
        index++;
      }
      return <ul className={classes.historyChange}>{htmls}</ul>;
    }
    return comment.content;
  };
  return (
    <Box mb={2} className={classes.commentItem}>
      <Grid container>
        <Avatar className={classes.avatarComment}>
          <img alt="avatar" src={userImg} />
        </Avatar>
        <Box className={classes.commentDescription}>
          <Typography component="p">{comment.user?.name}</Typography>
          <Typography component="span" className={classes.create}>
            <Typography component="small"> {comment.created_at}</Typography>
          </Typography>
          <Box className={classes.commentText} mt={2}>
            {content()}
          </Box>
        </Box>
      </Grid>
    </Box>
  );
}

export default CommentItem;
