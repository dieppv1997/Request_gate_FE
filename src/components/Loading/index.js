import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import { useStyles } from "./style";

function Loading() {
  const classes = useStyles();

  const openLoading = useSelector((state) => state.loading);
  return (
    <>
      {openLoading && (
        <div className={classes.container}>
          <CircularProgress />
        </div>
      )}
    </>
  );
}

export default Loading;
