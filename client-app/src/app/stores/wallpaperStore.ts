import { RootStore } from "./rootStore";
import { observable, action } from "mobx";

export default class WallpaperStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @observable isOpenedWindow = false;

  @action openWindow = () => {
    this.isOpenedWindow = true;
  };

  @action closeWindow = () => {
    this.isOpenedWindow = false;
  };
}
