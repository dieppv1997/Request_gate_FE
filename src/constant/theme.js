import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#4caf93",
      contrastText: "#fff",
    },
    white: {
      main: "#fff",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ed8077",
      contrastText: "#fff",
    },
    default: {
      contrastText: "black",
    },
    error: {
      main: "#f44336",
    },
  },
});
export default theme;
