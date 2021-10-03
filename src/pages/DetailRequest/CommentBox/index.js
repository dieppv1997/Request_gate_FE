import React from "react";
import { Box, TextField, Typography } from "@material-ui/core";
import CommentItem from "../CommentItem";

const CommentBox = (props) => {
  const { classes, current, handlePostComment, comments, total, onScroll } =
    props;

  const listComment = comments?.map((comment) => {
    return <CommentItem key={comment?.id} comment={comment} />;
  });
  return (
    <div>
      <Box className={classes.commentHeading} mt={1}>
        Comment
        <Typography component="small" className={classes.commentHeading}>
          ({current || 0}/{total || 0})
        </Typography>
      </Box>
      <Box id="comment" onScroll={onScroll} className={classes.wrapComment}>
        {listComment?.length > 0 ? (
          listComment
        ) : (
          <Typography component="p">
            Chưa có bình luận nào, hãy là người bình luận đầu tiên
          </Typography>
        )}
      </Box>
      <TextField
        className={classes.commentInput}
        InputProps={{ classes: { root: classes.commentInput } }}
        placeholder="Write your comment..."
        multiline
        fullWidth
        variant="outlined"
        onKeyDown={handlePostComment}
      ></TextField>
    </div>
  );
};

export default CommentBox;
