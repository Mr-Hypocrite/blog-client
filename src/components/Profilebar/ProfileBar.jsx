import "./profilebar.scss";

import { useContext } from "react";
import { Card } from "../index";
import { data } from "../../data/articleCard";
import { AuthContext } from "../../context/AuthContext";

export const ProfileBar = () => {
  let theme = ``;

  const { user } = useContext(AuthContext);

  let cardData = data[1];

  const Avatar = ({ props }) => {
    return (
      <div className="avatar-container">
        <img
          src={props?.profile}
          alt="user-profile"
          className="avatar-profile"
        />
        <div className="avatar-info">
          <span className="name"> {props.userName} </span>
          <span className="membership"> {props.membership} </span>
        </div>
      </div>
    );
  };

  return (
    user && <div className={`profilebar ${theme}`}>
      <Avatar props={user} />

      <h1 className="sub-header">Continue Reading</h1>

      <Card data={cardData} />

      <h1 className="sub-header">More Interesting Topics</h1>
      <div className="topics">
        {[
          "Health",
          "Social Media",
          "Politics",
          "Productivity",
          "Business",
          "Money",
          "Self Development",
          "Self Development",
          "Self Development",
        ].map((topic, index) => (
          <span className="tags" key={index}>
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};
