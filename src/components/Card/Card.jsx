import "./card.scss";

import React from "react";

export const Card = ({ data }) => {
  return (
    data && <div className="card">
      <img src={data.cardImg} alt="" className="card-img" />
      <div className="text-content">
        <div className="card-title">{data.title}</div>
        <div className="card-sub-title">{data.subTitle}</div>
        <div className="by">
          <img
            src={data.authorProfile}
            alt="author-profile"
            className="author-profile"
          />
          <span className="card-sub-title">by</span>
          <span className="author">{data.authorName}</span>
        </div>
      </div>
    </div>
  );
};
