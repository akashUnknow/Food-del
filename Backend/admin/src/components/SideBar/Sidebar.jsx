import React from "react";
import "./Sidebar.css";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-options">
        <NavLink to="add" className="sidebar-opt">
          <img src={assets.add_icon} alt="" />
          <p>Add Items</p>
        </NavLink>

        <NavLink to="List" className="sidebar-opt">
          <img src={assets.order_icon} alt="" />
          <p>List items</p>
        </NavLink>

        <NavLink to="Order" className="sidebar-opt">
          <img src={assets.order_icon} alt="" />
          <p>order</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
