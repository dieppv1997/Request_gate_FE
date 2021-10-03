import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import { SnackbarProvider } from "notistack";
import theme from "./constant/theme";
import store from "./store";
import "./index.css";
import App from "./App";

ReactDOM.render(
  <SnackbarProvider maxSnack={1}>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </ThemeProvider>
  </SnackbarProvider>,
  document.getElementById("root")
);

reportWebVitals();
