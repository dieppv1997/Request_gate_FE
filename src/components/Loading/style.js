import { makeStyles } from "@material-ui/core/styles";
import { Z_INDEX_POPUP } from "../../constant";
export const useStyles = makeStyles((theme) => ({
  container: {
    position: "fixed",
    background: "rgba(1,1,1,0.1)",
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: Z_INDEX_POPUP,
  },
}));
