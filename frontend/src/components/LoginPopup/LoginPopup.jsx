import React, { useState } from "react";
import "./LoginPopup.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { assets } from "../../assets/assets.js";

const LoginPopup = ({ setshowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currState, setcurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onChangeHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({
      ...data,
      [name]: value,
    });
  };
  const onLogin = async (e) => {
    e.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl = `${url}/api/user/login`;
    } else {
      newUrl = `${url}/api/user/register`;
    }
    const res = await axios.post(newUrl, data);
    // const result = await res.data;
    // console.log(result);
    if (res.data.success) {
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      setshowLogin(false);
    } else {
      alert(res.data.message);
    }
  };
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  return (
    <div className="Login-Popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => {
              setshowLogin(false);
            }}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              type="text"
              placeholder="Your name"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
            />
          )}

          <input
            type="email"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            placeholder="Your Email"
            required
          />
          <input
            type="password"
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            placeholder="Your password"
            required
          />
        </div>
        <button>{currState == "Sign Up" ? "Create Account" : "Login"}</button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        </div>
        {currState === "Login" ? (
          <p
            onClick={() => {
              setcurrState("Sign Up");
            }}
          >
            Don't have an Account? <span>Sign Up</span>
          </p>
        ) : (
          <p
            onClick={() => {
              setcurrState("Login");
            }}
          >
            Already have an Account? <span>Login</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default LoginPopup;
