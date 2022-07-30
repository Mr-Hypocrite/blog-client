import "./displayblog.scss";
import { SideBar } from "../../components";
import { useParams } from "react-router-dom";

export const DisplayBlog = () => {
  const { author, title } = useParams();
  console.log(author, title);

  return (
    <div className="display-blog">
      <SideBar />
      <div className="display-blog__container">Blog</div>
    </div>
  );
};
