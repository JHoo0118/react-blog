import React, { useContext, useEffect } from "react";
import ProfileHeader from "./ProfileHeader";
import ProfileContent from "./ProfileContent";
import { RootStoreContext } from "../../app/stores/rootStore";
import { RouteComponentProps } from "react-router-dom";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import NavBar from "../nav/NavBar";

interface RouteParams {
  username: string;
}

interface IProps extends RouteComponentProps<RouteParams> {}

const ProfilePage: React.FC<IProps> = ({ match }) => {
  const rootStore = useContext(RootStoreContext);
  const { loadingProfile, profile, loadProfile } = rootStore.profileStore;

  useEffect(() => {
    loadProfile(match.params.username);
  }, [loadProfile, match.params.username]);

  if (loadingProfile) return <LoadingComponent content="로딩 중..." />;

  return (
    <>
      <NavBar isPostListPage={false} />
      <div className="wrapper">
        <>
          <ProfileHeader profile={profile!} />
          <ProfileContent />
        </>
      </div>
    </>
  );
};

export default observer(ProfilePage);
