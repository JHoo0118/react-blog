import React from "react";

const LoadingComponent: React.FC<{ content?: string }> = ({ content }) => {
  return (
    <div className="container--loading">
      <div className="loading--box">
        <div>
          <i className="fas fa-circle-notch fa-3x fa-spin loading"></i>
        </div>
        <div className="loading--content">{content}</div>
      </div>
    </div>
  );
};

export default LoadingComponent;
