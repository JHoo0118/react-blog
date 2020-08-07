import React, { useContext } from "react";
import {
  RouteProps,
  RouteComponentProps,
  Route,
  Redirect,
} from "react-router-dom";
import { RootStoreContext } from "../stores/rootStore";
import { observer } from "mobx-react-lite";

interface IProps extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>>;
}

const PrivateRoute: React.FC<IProps> = ({ component: Component, ...rest }) => {
  const rooStore = useContext(RootStoreContext);
  const { isLoggedIn } = rooStore.userStore;

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? <Component {...props} /> : <Redirect to="/posts" />
      }
    />
  );
};

export default observer(PrivateRoute);
