import React, { useContext } from "react";
import { RootStoreContext } from "../../app/stores/rootStore";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { Tab } from "semantic-ui-react";
import { Link } from "react-router-dom";

const ProfilePosts = () => {
  const rootStore = useContext(RootStoreContext);
  const { profile } = rootStore.profileStore;

  if (!profile) return <LoadingComponent content="로딩 중..." />;
  return (
    <Tab.Pane>
      <div className="profile__posts__container">
        {profile?.posts.map((post) => (
          <div key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </div>
        ))}
      </div>
    </Tab.Pane>
  );
};

export default ProfilePosts;
