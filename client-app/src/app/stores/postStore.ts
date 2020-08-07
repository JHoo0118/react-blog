import { RootStore } from "./rootStore";
import { observable, runInAction, action, computed, reaction } from "mobx";
import { IPost } from "../models/post";
import { history } from "../..";
import agent from "../api/agent";

const LIMIT = 6;

export default class PostStore {
  rootStore: RootStore;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    reaction(
      () => this.predicate.keys(),
      () => {
        this.page = 0;
        this.postRegistry.clear();
        this.loadPosts();
      }
    );
  }

  @observable postRegistry = new Map();
  @observable post: IPost | null = null;
  @observable loadingInitial = false;
  @observable submitting = false;
  @observable uploadingPhoto = false;
  @observable postCount = 0;
  @observable page = 0;
  @observable predicate = new Map();

  @action setPredicate = (predicate: string, value: string) => {
    this.predicate.clear();
    if (predicate !== "all") {
      this.predicate.set(predicate, value);
    }
  };

  @computed get axiosParams() {
    const params = new URLSearchParams();
    params.append("limit", String(LIMIT));
    params.append("offset", `${this.page ? this.page * LIMIT : 0}`);
    this.predicate.forEach((value, key) => {
      params.append(key, value);
    });
    return params;
  }

  @computed get totalPages() {
    return Math.ceil(this.postCount / LIMIT);
  }

  @action setPage = (page: number) => {
    this.page = page;
  };

  @computed get isCurrentUserForPost() {
    if (this.rootStore.userStore.user && this.post) {
      return this.rootStore.userStore.user.username === this.post.host.username;
    }
    return false;
  }

  @computed get postsByDate() {
    return Array.from(this.postRegistry.values()).sort(
      (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
    );
  }

  // groupPostsByCategory(posts: IPost[]) {
  //   const sortedPosts = posts.sort(
  //     (a, b) => Date.parse(b.createdAt) - Date.parse(a.createdAt)
  //   );
  //   return Object.entries(
  //     sortedPosts.reduce((posts, post) => {
  //       const category = post.category;
  //       posts[category] = posts[category] ? [...posts[category], post] : [post];
  //       return posts;
  //     }, {} as { [key: string]: IPost[] })
  //   );
  // }

  @action loadPosts = async () => {
    this.loadingInitial = true;
    try {
      const postsEnvelope = await agent.Posts.list(this.axiosParams);
      const { posts, postCount } = postsEnvelope;

      runInAction(() => {
        posts.forEach((post: any) => {
          post.createdAt = post.createdAt.split(".")[0];
          this.postRegistry.set(post.id, post);
        });
        this.postCount = postCount;
        this.loadingInitial = false;
      });
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };

  @action loadPost = async (id: string) => {
    let post = this.getPost(id);
    if (post) {
      this.post = post;
      return post;
    } else {
      this.loadingInitial = true;
    }
    try {
      post = await agent.Posts.details(id);
      runInAction(() => {
        this.post = post;
        this.postRegistry.set(post.id, post);
        this.loadingInitial = false;
      });
      return post;
    } catch (error) {
      runInAction(() => {
        this.loadingInitial = false;
      });
      console.log(error);
    }
  };

  @action createPost = async (post: IPost, file: Blob) => {
    this.submitting = true;
    try {
      await agent.Posts.create(post);
      const photo = await agent.Posts.uploadPhoto(post.id, file);
      runInAction(() => {
        this.postRegistry.set(post.id, post);
        post.thumbnail.id = photo.id;
        post.thumbnail.url = photo.url;
        this.submitting = false;
      });
      history.push(`/posts/${post.id}`);
      window.location.reload();
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
      });
      alert("제출 오류 발생");
      console.log(error);
    }
  };

  @action editPost = async (post: IPost, file: Blob) => {
    this.submitting = true;
    try {
      await agent.Posts.update(post);
      const isExistThumbnail = post.thumbnail;
      if (isExistThumbnail) {
        await agent.Posts.deletePhoto(post?.id);
      }
      const photo = await agent.Posts.uploadPhoto(post.id, file);
      runInAction(() => {
        this.postRegistry.set(post.id, post);
        post.thumbnail.id = photo.id;
        post.thumbnail.url = photo.url;
        this.submitting = false;
      });
      history.push(`/posts/${post.id}`);
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  @action editPostNoEditImage = async (post: IPost) => {
    this.submitting = true;
    try {
      await agent.Posts.update(post);
      runInAction(() => {
        this.postRegistry.set(post.id, post);
        this.submitting = false;
      });
      history.push(`/posts/${post.id}`);
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  @action deletePhoto = async (id: string) => {
    this.submitting = true;
    try {
      if (this.post?.id === id && this.post.thumbnail) {
        await agent.Posts.deletePhoto(this.post?.id);
      }
      await agent.Posts.delete(id);
      runInAction(() => {
        this.postRegistry.delete(id);
        this.submitting = true;
      });
      history.push(`/posts`);
    } catch (error) {
      runInAction(() => {
        this.submitting = false;
      });
      console.log(error);
    }
  };

  // @action uploadPhoto = async (id: string, file: Blob) => {
  //   this.uploadingPhoto = true;
  //   try {
  //     if (this.post) {
  //       const isExistThumbnail = this.post?.thumbnail;
  //       if (isExistThumbnail) {
  //         await agent.Posts.deletePhoto(this.post?.id);
  //       }
  //       const photo = await agent.Posts.uploadPhoto(this.post.id, file);
  //       runInAction(() => {
  //         if (this.post) {
  //           this.post.thumbnail.id = photo.id;
  //           this.post.thumbnail.url = photo.url;
  //         }
  //       });
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     runInAction(() => {
  //       this.uploadingPhoto = false;
  //     });
  //   }
  // };

  getPost = (id: string) => {
    return this.postRegistry.get(id);
  };
}
