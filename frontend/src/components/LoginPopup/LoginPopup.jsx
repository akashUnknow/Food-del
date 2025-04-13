import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({ setshowLogin }) => {
  const [currState, setcurrState] = useState("Login");
  return (
    <div className="Login-Popup">
      <form className="login-popup-container">
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
            <input type="text" placeholder="Your name" required />
          )}

          <input type="email" placeholder="Your Email" required />
          <input type="password" placeholder="Your password" required />
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
