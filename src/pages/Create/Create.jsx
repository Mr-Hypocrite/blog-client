import "./create.scss";
import { SideBar } from "../../components/";
import { useContext, useState } from "react";
import { AuthContext, UtilContext } from "../../context/";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useFetch from "../../hooks/useFetch";

export const Create = () => {
  const { user } = useContext(AuthContext);
  const { utilDispatch } = useContext(UtilContext);
  const navigate = useNavigate();
  const { data, postData, error } = useFetch(`blog/create`, "POST");

  const [blogData, setBlogData] = useState({
    title: "",
    desc: "",
    tags: [],
    file: null,
  });

  const [tag, setTag] = useState("");

  const addCategory = () => {
    let c = tag.trim().toLowerCase();
    if (c && !blogData.tags.includes(c)) {
      setTag("");
      setBlogData((prevValue) => {
        return { ...prevValue, tags: [...prevValue.tags, c] };
      });
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addCategory();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBlogData((prevData) => {
      return { ...prevData, [name]: value };
    });
    console.log(blogData);
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    setBlogData((prevData) => {
      return { ...prevData, file: file };
    });
  };

  const handlePublish = () => {
    postData(blogData);
  };

  useEffect(() => {
    if (data || error) {
      utilDispatch({ type: "modal", payload: data || error });
      navigate("/");
    }
    if (user) {
      return;
    } else {
      navigate("/signin");
    }
  }, [user, navigate, data, error, utilDispatch]);

  if (user) {
    return (
      <div className="create">
        <SideBar />
        <div className="create-container">
          <h1 className="title">Create</h1>
          <div className="create-blog-form">
            <div className="cover-image-container">
              {!blogData.file && (
                <label htmlFor="coverImage" className="cover-input">
                  <input
                    type="file"
                    name="coverImage"
                    id="coverImage"
                    onChange={handleFile}
                  />
                  Add Cover Image
                </label>
              )}
              {blogData.file && (
                <img src={URL.createObjectURL(blogData.file)} className="cover-image" alt="" />
              )}
            </div>
            <div className="input-container">
              <input
                type="text"
                name="title"
                required
                placeholder=" "
                value={blogData.title}
                onChange={handleChange}
              />
              <label htmlFor="title" className="placeholder">
                Title
              </label>
            </div>
            <div className="input-container category">
              <input
                id="catInput"
                type="text"
                name="category"
                required
                placeholder=" "
                value={tag}
                onChange={(e) => setTag(e.target.value)}
                onKeyDown={handleKeyPress}
              />
              <label htmlFor="category" className="placeholder">
                Tags
              </label>
              <button className="std-btn" onClick={addCategory}>
                +
              </button>
            </div>
            {blogData.tags && (
              <div className="cat-container">
                {blogData.tags.map((tag, index) => (
                  <div
                    className="tags"
                    key={index}
                    onClick={() => {
                      setBlogData((prevValue) => {
                        return {
                          ...prevValue,
                          tags: [
                            ...prevValue.tags.filter((ftag) => ftag !== tag),
                          ],
                        };
                      });
                    }}
                  >
                    {tag}
                    <span className="tags-cross">x</span>
                  </div>
                ))}
              </div>
            )}
            <textarea
              name="desc"
              id="blogBody"
              cols="30"
              rows="10"
              placeholder="Tell Your Story..."
              value={blogData.desc}
              onChange={handleChange}
            ></textarea>

            <button className="std-btn publish-btn" onClick={handlePublish}>
              Publish
            </button>
          </div>
        </div>
      </div>
    );
  }
};
