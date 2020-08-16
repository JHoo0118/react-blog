import React, { useContext, useEffect } from "react";
import { RootStoreContext } from "../../../app/stores/rootStore";
import { RouteComponentProps, Link } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { observer } from "mobx-react-lite";
import ReactMarkdown from "react-markdown";
import NavBar from "../../nav/NavBar";
import convertDatetime from "../../../helpers/convertDatetime";
import InlineCodeBlock from "../../../components/InlineCodeBlock";
import CodeBlock from "../../../components/ReactSyntaxHighlighter";
import { Helmet } from "react-helmet";

interface DetailsParams {
  id: string;
}

const PostDetails: React.FC<RouteComponentProps<DetailsParams>> = ({
  match,
}) => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadPost,
    loadingInitial,
    post,
    isCurrentUserForPost,
    deletePhoto,
  } = rootStore.postStore;

  useEffect(() => {
    loadPost(match.params.id);
  }, [loadPost, match.params.id]);

  if (loadingInitial) return <LoadingComponent content="로딩 중..." />;
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>블로그 | {post ? post.title : ""} </title>
      </Helmet>
      {post && (
        <>
          <div className="detail">
            <NavBar isPostListPage={false} />
            <div className="detail__header">
              <div className="detail__header__explanation">
                <h1 className="detail__header__explanation-title">
                  {post.title}
                </h1>
                <p className="detail__header__explanation-description">
                  {post.description}
                </p>
                <div className="detail__header__figure">
                  <div className="detail__header__figure__user">
                    <span>by&nbsp;</span>
                    <span>
                      <Link
                        to={`/profile/${post.host.username}`}
                        className="detail__header__figure__user-link"
                      >
                        {post.host.displayName}
                      </Link>
                    </span>
                  </div>
                  <div className="detail__header__figure__date">
                    <span className="detail__header__figure__date-text">
                      작성 날짜: {convertDatetime(post.createdAt)}
                    </span>
                  </div>
                </div>
              </div>
              <div
                style={{ backgroundImage: `url(${post.thumbnail?.url})` }}
                className="detail__img"
              />
              {isCurrentUserForPost && (
                <div className="btn-absolute">
                  <Link
                    className="btn-detail btn--main"
                    to={`/manage/${post?.id}`}
                  >
                    편집하기
                  </Link>
                  <button
                    className="btn-detail btn--delete"
                    onClick={() =>
                      window.confirm("삭제하시겠습니까?") &&
                      deletePhoto(post.id)
                    }
                  >
                    삭제하기
                  </button>
                </div>
              )}
            </div>
            <div className="wrapper wrapper-detail">
              <div className="detail__content">
                <ReactMarkdown
                  source={post.content}
                  renderers={{ code: CodeBlock, inlineCode: InlineCodeBlock }}
                  escapeHtml={false}
                ></ReactMarkdown>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default observer(PostDetails);
