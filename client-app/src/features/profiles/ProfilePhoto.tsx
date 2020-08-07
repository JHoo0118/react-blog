import React, { useContext, useState, useCallback } from "react";
import { Tab, Button, Grid, Icon } from "semantic-ui-react";
import { RootStoreContext } from "../../app/stores/rootStore";
import { useDropzone } from "react-dropzone";

const ProfilePhoto = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    profile,
    isCurrentUserForProfile,
    uploadPhoto,
    uploadingPhoto,
    deletePhoto,
    loading,
  } = rootStore.profileStore;

  const [addPhotoMode, setAddPhotoMode] = useState(false);
  const [files, setFiles] = useState<any[]>([]);
  const onDrop = useCallback(
    (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file: object) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
    [setFiles]
  );
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Tab.Pane>
      <Grid>
        <Grid.Column width={16} style={{ paddingBottom: 0 }}>
          <div className="profile__photo__header">
            <h2 className="profile__photo__header--title">사진</h2>
            {isCurrentUserForProfile && (
              <Button
                floated="right"
                basic
                content={addPhotoMode ? "취소" : "사진 변경"}
                onClick={() => setAddPhotoMode(!addPhotoMode)}
              />
            )}
          </div>
        </Grid.Column>
      </Grid>

      <div className="profile__photo__body">
        <div
          className="profile__photo__body--img"
          style={
            files.length > 0
              ? { backgroundImage: `url(${files[0]?.preview})` }
              : profile?.image
              ? { backgroundImage: `url(${profile?.image})` }
              : {
                  backgroundImage: `url(${require("../../assets/img/user.png")})`,
                }
          }
        >
          {addPhotoMode && isCurrentUserForProfile && (
            <div className="btn__group btn--absolute">
              <button
                className="btn-detail btn--main"
                onClick={() =>
                  uploadPhoto(files[0]).finally(() => setFiles([]))
                }
              >
                {uploadingPhoto && (
                  <i className="fas fa-circle-notch fa-spin loading"></i>
                )}
                사진 변경
              </button>
              <button
                className="btn-detail btn--delete"
                onClick={() =>
                  profile &&
                  profile.photo &&
                  window.confirm("기본 사진으로 변경하시겠습니까?") &&
                  deletePhoto(profile.photo)
                }
              >
                {loading && (
                  <i className="fas fa-circle-notch fa-spin loading"></i>
                )}
                기본 사진
              </button>
            </div>
          )}
        </div>
        <div>
          {addPhotoMode && isCurrentUserForProfile && (
            <div className="profile__photo__body--box">
              <div
                className={
                  "profile__photo__body--upload " +
                  (isDragActive
                    ? "dropzone-styles dropzone-active"
                    : "dropzone-styles")
                }
                {...getRootProps()}
              >
                <input {...getInputProps()} />
                <Icon name="upload" size="huge" />
                <h2 className="profile__photo__body--text--1">
                  이미지를 드래그 해주세요!
                  <br />
                  혹은 클릭!
                </h2>
              </div>
            </div>
          )}
        </div>
      </div>
    </Tab.Pane>
  );
};

export default ProfilePhoto;
