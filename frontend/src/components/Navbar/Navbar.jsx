import React, { useContext, useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
const Navbar = ({ setshowLogin }) => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartAmout, token, setToken } = useContext(StoreContext);
  const navegate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navegate("/");
  };
  return (
    <div className="navbar">
      <Link to="/">
        <img src={assets.logo} alt="" className="logo" />
      </Link>
      <ul className="navbar-menu">
        <Link
          to="/"
          onClick={() => {
            setMenu("home");
          }}
          className={menu === "home" ? "active" : ""}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          onClick={() => {
            setMenu("menu");
          }}
          className={menu === "menu" ? "active" : ""}
        >
          Menu
        </a>
        <a
          href="#app-download"
          onClick={() => {
            setMenu("mobile-app");
          }}
          className={menu === "mobile-app" ? "active" : ""}
        >
          Mobile-app
        </a>
        <a
          href="#fotter"
          onClick={() => {
            setMenu("contact-us");
          }}
          className={menu === "contact-us" ? "active" : ""}
        >
          Contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to="/cart">
            {" "}
            <img src={assets.basket_icon} alt="" />
          </Link>
          <div className={getTotalCartAmout() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button
            onClick={() => {
              setshowLogin(true);
            }}
          >
            sign in
          </button>
        ) : (
          <div className="navbar-prifle">
            <img src={assets.profile_icon} alt="" />
            <ul className="navprofile-dropdown">
              <li>
                {" "}
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logOut}>
                <img src={assets.logout_icon} alt="" />
                <p>Log Out</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
