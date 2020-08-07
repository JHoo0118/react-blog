import { IPost, IPhoto } from "./post";

export interface IProfile {
  displayName: string;
  username: string;
  bio: string;
  image: string;
  photo: IPhoto | null;
  posts: IPost[];
}
