import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <>
      <span>찾을 수 없습니다.</span>
      <Link to="/posts">게시물 보기</Link>
    </>
  );
};

export default NotFound;
