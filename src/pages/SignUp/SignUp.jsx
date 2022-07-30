import { useEffect, useState } from "react";
import useFetch from "../../hooks/useFetch";
import { formFormat } from "../../data/signUpFormat";
import { AuthContext } from "../../context/AuthContext";
import "./signup.scss";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const { data, postData } = useFetch(
    `auth/signUp`,
    "POST"
  );

  const { user, dispatch } = useContext(AuthContext);

  const navigate = useNavigate();

  let [formData, setFormData] = useState({
    userName: "",
    email: "",
    password: "",
    dob: "",
    phone: "",
    bio: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  const handleSubmission = () => {
    postData(formData);
  };

  useEffect(() => {
    if (user) {
      console.log(user);
      navigate("/");
    }
    if (data) {
      dispatch({ type: "LOGIN_SUCCESS", payload: data });
    }
  }, [data, dispatch, navigate, user]);

  return (
    <div className="signup">
      <div className="form-container">
        <div className="logo">
          <div className="left"></div>
          <div className="right"></div>
        </div>
        <h1 className="title">Sign Up</h1>
        {formFormat.map((input, index) => (
          <div className="input-container" key={index}>
            <input
              type={input.type}
              name={input.name}
              required={input.required}
              placeholder=" "
              value={formData[input.name]}
              onChange={handleChange}
            />
            <label htmlFor={input.name} className="placeholder">
              {input.label}
            </label>
          </div>
        ))}
        <button className="std-btn" onClick={handleSubmission}>
          Sign Up
        </button>
      </div>
    </div>
  );
};
