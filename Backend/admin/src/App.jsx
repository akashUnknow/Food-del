import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Add from "./components/pages/Add/Add";
import List from "./components/pages/List/List";
import Order from "./components/pages/order/Order";

const App = () => {
  return (
    <div>
      <Navbar />
      <hr />
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/List" element={<List />} />
          <Route path="/Order" element={<Order />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
