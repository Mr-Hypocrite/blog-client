import "./searchbar.scss";
import {
  SearchOutlinedIcon,
  NotificationsNoneTwoToneIcon,
  BookmarksTwoToneIcon,
} from "../../icons/";

import React from "react";
import { useContext } from "react";
import { UtilContext } from "../../context";

export const SearchBar = () => {
  let notiCount = 1;
  const { theme } = useContext(UtilContext);

  return (
    <div className={`searchbar ${theme}`}>
      <div className="search-input">
        <input type="text" placeholder="Search for articles" />
        <SearchOutlinedIcon className="searchbar-icon" />
      </div>
      <div className="search-right">
        <div className="notification">
          <NotificationsNoneTwoToneIcon className="searchbar-icon" />
          <div className="noti-count">{notiCount}</div>
        </div>
        <BookmarksTwoToneIcon className="searchbar-icon" />
      </div>
    </div>
  );
};
