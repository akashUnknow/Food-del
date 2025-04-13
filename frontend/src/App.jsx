import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/pages/Home/Home";
import Cart from "./components/pages/Cart/Cart";
import PlaceOrder from "./components/pages/PlaceOrder/PlaceOrder";
import { Route, Routes } from "react-router-dom";
import Fotter from "./components/Fotter/Fotter";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {
  const [showLogin, setshowLogin] = useState(false);
  return (
    <>
      {showLogin ? <LoginPopup setshowLogin={setshowLogin} /> : <></>}
      <div className="app">
        <Navbar setshowLogin={setshowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/PlaceOrder" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Fotter />
    </>
  );
}

export default App;
