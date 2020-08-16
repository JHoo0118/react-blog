import React, { useContext, useEffect, useState } from "react";
import { observer } from "mobx-react-lite";
import PostList from "./PostList";
import { RootStoreContext } from "../../../app/stores/rootStore";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import NavBar from "../../nav/NavBar";
import InfiniteScroll from "react-infinite-scroller";
import { Helmet } from "react-helmet";

const PostDashboard: React.FC = () => {
  const rootStore = useContext(RootStoreContext);
  const {
    loadPosts,
    loadingInitial,
    setPage,
    page,
    totalPages,
  } = rootStore.postStore;
  const [loadingNext, setLoadingNext] = useState(false);

  const handleGetNext = () => {
    setLoadingNext(true);
    setPage(page + 1);
    loadPosts().then(() => setLoadingNext(false));
  };

  useEffect(() => {
    loadPosts();
  }, [loadPosts]);

  if (loadingInitial && page === 0)
    return <LoadingComponent content="로딩 중..." />;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>블로그 | 게시물 </title>
      </Helmet>
      <NavBar isPostListPage={true} />
      <div className="wrapper__list">
        <InfiniteScroll
          pageStart={0}
          loadMore={handleGetNext}
          hasMore={!loadingNext && page + 1 < totalPages}
          initialLoad={false}
        >
          <PostList loadingNext={loadingNext} />
        </InfiniteScroll>
      </div>
    </>
  );
};

export default observer(PostDashboard);
