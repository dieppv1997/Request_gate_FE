import { Route, Redirect } from "react-router-dom";
function PrivateRouter({ component: Component, ...rest }) {
  const token = localStorage.getItem("access_token");
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
}
export default PrivateRouter;
