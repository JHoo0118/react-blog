import React from "react";
import { Segment } from "semantic-ui-react";
import { observer } from "mobx-react-lite";
import { IProfile } from "../../app/models/profile";

interface IProps {
  profile: IProfile;
}

const ProfileHeader: React.FC<IProps> = ({ profile }) => {
  return (
    <Segment>
      <div className="profile__header__container">
        <div className="profile__header__figure">
          <div className="profile__header__figure__user">
            <img
              className="profile__header__figure__img"
              src={
                profile?.image
                  ? profile?.image
                  : require("../../assets/img/user.png")
              }
              alt="프로필 이미지"
            />
            <span className="profile__header__figure__name">
              {profile.displayName}
            </span>
          </div>
          <div className="profile__header__figure__bio">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </div>
        </div>
      </div>
    </Segment>
  );
};

export default observer(ProfileHeader);
