import "./sidebar.scss";
import {
  DashboardTwoToneIcon,
  EditTwoToneIcon,
  DarkModeIcon,
  LogoutTwoToneIcon,
  SettingsOutlinedIcon,
} from "../../icons";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext, UtilContext } from "../../context/";
import useFetch from "../../hooks/useFetch";

export const SideBar = () => {
  const [fetchurl, setFetchUrl] = useState(``);
  const [logout, setLogout] = useState(false);
  // const [color, setColor] = useState(false);

  const { user, dispatch } = useContext(AuthContext);
  const { theme, utilDispatch } = useContext(UtilContext);

  const { data } = useFetch(fetchurl);

  useEffect(() => {
    if (logout && data) {
      utilDispatch({ type: "modal", payload: "Logged Out" });
      dispatch({ type: "LOGOUT" });
    }
  }, [logout, dispatch, data, utilDispatch]);

  return (
    <div className={`sidebar ${theme ? `light` : `dark`}`}>
      <Link to="/" className="logo">
        <div className="left"></div>
        <div className="right"></div>
      </Link>
      <div className="sidebar-links">
        <Link to="/" className="s-link">
          <DashboardTwoToneIcon className="s-icon" />
          <span>Dashboard</span>
        </Link>
        <Link to="/settings" className="s-link">
          <SettingsOutlinedIcon className="s-icon" />
          <span>Settings</span>
        </Link>
        <Link to="/create" className="s-link">
          <EditTwoToneIcon className="s-icon" />
          <span>Create</span>
        </Link>
        <div className="s-bottom">
          <div
            className="s-link"
          >
            <DarkModeIcon className="s-icon" />
            <span>Theme</span>
          </div>
          {user && (
            <div
              className="s-link"
              onClick={() => {
                setLogout(true);
                setFetchUrl(`auth/signOut`);
              }}
            >
              <LogoutTwoToneIcon className="s-icon" />
              <span>Logout</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
