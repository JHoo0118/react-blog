import React from "react";
import { IPost } from "../../../app/models/post";
import { Link } from "react-router-dom";
import convertDatetime from "../../../helpers/convertDatetime";

const PostListItem: React.FC<{ post: IPost }> = ({ post }) => {
  return (
    <Link className="card-link" to={`/posts/${post.id}`}>
      <div className="card">
        <div className="card__header">
          <span className="card__header--category">{post.category}</span>
          <div
            style={{ backgroundImage: `url(${post.thumbnail?.url})` }}
            className="card__header--img"
          />
        </div>
        <div className="card__body">
          <span className="card__body--title">
            <h2>{post.title}</h2>
          </span>
          <p className="card__body--description">{post.description}</p>
        </div>
        <div className="card__footer">
          <span className="card__footer--createdAt">
            작성 날짜:&nbsp;{convertDatetime(post.createdAt)}
          </span>
          <span className="card__footer--updatedAt">
            마지막 수정 날짜:&nbsp;{convertDatetime(post.updatedAt)}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default PostListItem;
