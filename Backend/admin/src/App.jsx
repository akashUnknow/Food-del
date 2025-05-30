import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./components/pages/Add/Add";
import List from "./components/pages/List/List";
import Order from "./components/pages/order/Order";
import { ToastContainer } from "react-toastify";

const App = () => {
  const url = "http://localhost:4000";
  return (
    <div>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add url={url} />} />
          <Route path="/List" element={<List url={url} />} />
          <Route path="/Order" element={<Order url={url} />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
