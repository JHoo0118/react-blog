import axios, { AxiosResponse } from "axios";
import { IPost, IPhoto, IPostsEnvelope } from "../models/post";
import { history } from "../..";
import { IUser, IUserFormValues } from "../models/user";
import { IProfile } from "../models/profile";

axios.defaults.baseURL = "http://localhost:5000/api";

axios.interceptors.request.use(
  (config) => {
    const token = window.localStorage.getItem("jwt");
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(undefined, (error) => {
  const originalRequest = error.config;
  if (error.message === "Network Error" && !error.response) {
    alert("네트워크 에러");
  }
  const { status, data, config } = error.response;
  if (status === 404) {
    history.push("/notfound");
  }
  if (status === 401 && originalRequest.url.endsWith("refresh")) {
    window.localStorage.removeItem("jwt");
    window.localStorage.removeItem("refreshToken");
    history.push("/posts");
    alert("세션이 만료되었습니다. 다시 로그인 해주세요.");
    return Promise.reject(error);
  }
  if (status === 401 && !originalRequest._retry) {
    originalRequest._retry = true;
    return axios
      .post("user/refresh", {
        token: window.localStorage.getItem("jwt"),
        refreshToken: window.localStorage.getItem("refreshToken"),
      })
      .then((res) => {
        window.localStorage.setItem("jwt", res.data.token);
        window.localStorage.setItem("refreshToken", res.data.refreshToken);
        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${res.data.token}`;
        return axios(originalRequest);
      });
  }
  if (
    status === 400 &&
    config.method === "get" &&
    data.errors.hasOwnProperty("id")
  ) {
    history.push("/notfound");
  }
  if (status === 500) {
    alert("서버 에러");
  }
  throw error.response;
});

const responseBody = (response: AxiosResponse) => response.data;

const sleep = (ms: number) => (response: AxiosResponse) =>
  new Promise<AxiosResponse>((resolve) =>
    setTimeout(() => resolve(response), ms)
  );

const requests = {
  get: (url: string) => axios.get(url).then(sleep(1000)).then(responseBody),
  post: (url: string, body: {}) =>
    axios.post(url, body).then(sleep(1000)).then(responseBody),
  put: (url: string, body: {}) =>
    axios.put(url, body).then(sleep(1000)).then(responseBody),
  del: (url: string) => axios.delete(url).then(sleep(0)).then(responseBody),
  postForm: (url: string, file: Blob) => {
    let formData = new FormData();
    formData.append("File", file);
    return axios
      .post(url, formData, {
        headers: { "Content-type": "multipart/form-data" },
      })
      .then(responseBody);
  },
};

const Posts = {
  list: (params: URLSearchParams): Promise<IPostsEnvelope> =>
    axios
      .get("/posts", { params: params })
      .then(sleep(1000))
      .then(responseBody),
  details: (id: string) => requests.get(`/posts/${id}`),
  create: (post: IPost) => requests.post("/posts", post),
  update: (post: IPost) => requests.put(`/posts/${post.id}`, post),
  delete: (id: string) => requests.del(`/posts/${id}`),
  deletePhoto: (id: string) => requests.del(`/photos/${id}`),
  uploadPhoto: (id: string, photo: Blob): Promise<IPhoto> =>
    requests.postForm(`/photos/${id}/add`, photo),
};

const User = {
  current: (): Promise<IUser> => requests.get("/user"),
  login: (user: IUserFormValues): Promise<IUser> =>
    requests.post(`/user/login`, user),
  register: (user: IUserFormValues): Promise<IUser> =>
    requests.post(`/user/register`, user),
};

const Profiles = {
  get: (username: string): Promise<IProfile> =>
    requests.get(`/profiles/${username}`),
  uploadPhoto: (photo: Blob): Promise<IPhoto> =>
    requests.postForm(`/photos`, photo),
  deletePhoto: (id: string) => requests.del(`/photos/user/${id}`),
};

export default {
  Posts,
  User,
  Profiles,
};
