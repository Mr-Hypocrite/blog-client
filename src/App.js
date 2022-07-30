import "./App.scss";
import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { UtilContext } from "./context";
import { Modal } from "./components/";
import {
  Home,
  Feed,
  Create,
  SignUp,
  SignIn,
  Settings,
  UserProfile,
  DisplayBlog,
} from "./pages";

export const App = () => {

  const { theme, modal } = useContext(UtilContext);

  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="feed" element={<Feed />} />
          <Route path="create" element={<Create />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="settings" element={<Settings />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route path="blog">
            <Route path=":author/:title" element={<DisplayBlog />} />
          </Route>
        </Route>
      </Routes>
      {/* Modal will have two props message and boolean for visibility */}
      {modal && <Modal />}
    </div>
  );
};
