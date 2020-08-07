import React from "react";
import { Tab } from "semantic-ui-react";
import ProfilePhoto from "./ProfilePhoto";
import { observer } from "mobx-react-lite";
import ProfilePosts from "./ProfilePosts";

const ProfileContent = () => {
  const panes = [
    { menuItem: "사진", render: () => <ProfilePhoto /> },
    {
      menuItem: "게시물",
      render: () => <ProfilePosts />,
    },
  ];

  return (
    <div className="profile__body__wrapper">
      <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
    </div>
  );
};

export default observer(ProfileContent);
