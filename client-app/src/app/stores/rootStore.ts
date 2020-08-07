import { createContext } from "react";
import { configure } from "mobx";
import PostStore from "./postStore";
import WallpaperStore from "./wallpaperStore";
import UserStore from "./userStore";
import CommonStore from "./commonStore";
import ModalStore from "./modalStore";
import ProfileStore from "./profileStore";
configure({ enforceActions: "always" });

export class RootStore {
  postStore: PostStore;
  wallpaperStore: WallpaperStore;
  userStore: UserStore;
  commonStore: CommonStore;
  modalStore: ModalStore;
  profileStore: ProfileStore;

  constructor() {
    this.postStore = new PostStore(this);
    this.wallpaperStore = new WallpaperStore(this);
    this.userStore = new UserStore(this);
    this.commonStore = new CommonStore(this);
    this.modalStore = new ModalStore(this);
    this.profileStore = new ProfileStore(this);
  }
}

export const RootStoreContext = createContext(new RootStore());
