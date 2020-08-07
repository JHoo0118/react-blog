export interface IPostsEnvelope {
  posts: IPost[];
  postCount: number;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  description: string;
  thumbnail: IPhoto;
  category: string;
  createdAt: string;
  updatedAt: string;
  host: IHost;
}

export class PostFormValues {
  id: string = "";
  title: string = "";
  content: string = "";
  description: string = "";
  thumbnail: IPhoto = { id: "", url: "" };
  category: string = "";
  constructor(init?: PostFormValues) {
    Object.assign(this, init);
  }
}

export interface IPhoto {
  id: string;
  url: string;
}

export interface IHost {
  username: string;
  displayName: string;
  image: string;
}
