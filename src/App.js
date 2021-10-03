import { Switch, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { ALL_LINK } from "./constant";
import PrivateRouter from "./routers/PrivateRouter";
import AdminRouter from "./routers/AdminRouter";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import CreateRequest from "./pages/CreateRequest";
import DetailRequest from "./pages/DetailRequest";
import UpdateRequest from "./pages/UpdateRequest";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import User from "./pages/User";
import Category from "./pages/Category";
import Department from "./pages/Department";
import ChangePassword from "./pages/ChangePassword";
import { getMyProfile } from "./store/action/user";
import { getDepartment } from "./store/action/department";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.getItem("access_token")) {
      dispatch(getMyProfile());
    }
    dispatch(getDepartment());
  }, [dispatch]);
  return (
    <div>
      <Loading />
      <Switch>
        <Route exact path={ALL_LINK.LOGIN}>
          <Login />
        </Route>
        <Route exact path={ALL_LINK.FORGOT_PASSWORD}>
          <ForgotPassword />
        </Route>
        <Route exact path={ALL_LINK.CHANGE_PASSWORD}>
          <ChangePassword />
        </Route>
        <PrivateRouter exact path={ALL_LINK.HOME} component={Home} />
        <PrivateRouter exact path={ALL_LINK.HISTORY_REQUEST} component={Home} />
        <PrivateRouter
          exact
          path={ALL_LINK.CREATE_REQUEST}
          component={CreateRequest}
        />
        <PrivateRouter
          path={ALL_LINK.UPDATE_REQUEST + "/:id"}
          component={UpdateRequest}
        />
        <PrivateRouter
          path={ALL_LINK.DETAIL_REQUEST + `/:id`}
          component={DetailRequest}
        />
        <PrivateRouter path={ALL_LINK.DEPARTMENT} component={Department} />

        <AdminRouter exact path={ALL_LINK.USER} component={User} />
        <AdminRouter exact path={ALL_LINK.CATEGORY} component={Category} />
      </Switch>
    </div>
  );
}

export default App;
