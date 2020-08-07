import React, { useContext, useEffect } from "react";
import {
  Route,
  Switch,
  RouteComponentProps,
  withRouter,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import Home from "../../features/home/home/Home";
import PostDashboard from "../../features/posts/dashboard/PostDashboard";
import PostDetails from "../../features/posts/details/PostDetails";
import PostForm from "../../features/posts/form/PostForm";
import LoginForm from "../../features/user/LoginForm";
import NotFound from "./NotFound";
import { RootStoreContext } from "../stores/rootStore";
import LoadingComponent from "./LoadingComponent";
import ProfilePage from "../../features/profiles/ProfilePage";
import PrivateRoute from "./PrivateRoute";
import ModalContainer from "../common/modals/ModalContainer";

const App: React.FC<RouteComponentProps> = ({ location }) => {
  const rootStore = useContext(RootStoreContext);
  const { setAppLoaded, token, appLoaded } = rootStore.commonStore;
  const { getUser } = rootStore.userStore;
  useEffect(() => {
    if (token) {
      getUser().finally(() => setAppLoaded());
    } else {
      setAppLoaded();
    }
  }, [getUser, setAppLoaded, token]);

  if (!appLoaded) return <LoadingComponent content="로딩 중..." />;

  return (
    <>
      <ModalContainer />
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}
        render={() => (
          <>
            <Switch>
              <Route exact path="/posts" component={PostDashboard} />
              <Route path="/posts/:id" component={PostDetails} />
              <Route path="/profile/:username" component={ProfilePage} />
              <PrivateRoute
                key={location.key}
                path={["/createPost", "/manage/:id"]}
                component={PostForm}
              />
              <Route path="/login" component={LoginForm} />
              <Route component={NotFound} />
            </Switch>
          </>
        )}
      />
    </>
  );
};

export default withRouter(observer(App));
