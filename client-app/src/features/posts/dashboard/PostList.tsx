import React, { useContext } from "react";
import { observer } from "mobx-react-lite";
import PostListItem from "./PostListItem";
import { RootStoreContext } from "../../../app/stores/rootStore";
import PostFilter from "./PostFilter";

interface IProps {
  loadingNext: boolean;
}

const PostList: React.FC<IProps> = ({ loadingNext }) => {
  const rootStore = useContext(RootStoreContext);
  const { postsByDate } = rootStore.postStore;
  return (
    <div className="wrapper--flex">
      <div className="container--grid">
        {postsByDate.map((post) => (
          <PostListItem key={post.id} post={post} />
        ))}
        <div className="page--loading">
          {loadingNext && (
            <i className="fas fa-circle-notch fa-3x fa-spin loading"></i>
          )}
        </div>
      </div>
      <div className="filter">
        <input
          className="filter--checkbox"
          type="checkbox"
          id="filter--toggle"
        />
        <label htmlFor="filter--toggle" className="filter--btn">
          <span className="filter--icon">
            <i className="fas fa-search"></i>
          </span>
          <div className="filter--container">
            <PostFilter />
          </div>
        </label>
      </div>
    </div>
  );
};

export default observer(PostList);
