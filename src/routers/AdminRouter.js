import { Route, Redirect } from "react-router-dom";
import { ROLE } from "./../constant/index";

function AdminRouter({ component: Component, ...rest }) {
  const token = localStorage.getItem("access_token");
  const role = parseInt(localStorage.getItem("role"));
  return (
    <Route
      {...rest}
      render={(props) =>
        token && role === ROLE.ADMIN ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );
}
export default AdminRouter;
