import React, { useContext } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../../context/StoreContext";
const PlaceOrder = () => {
  const { getTotalCartAmout } = useContext(StoreContext);
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Order Summary</p>
        <div className="muti-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Street" />
        <div className="muti-fields">
          <input type="text" placeholder="city" />
          <input type="text" placeholder="State" />
        </div>
        <div className="muti-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Countrye" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>cart total</h2>
          <div>
            <div className="cart-total-details">
              <p>Sub Total</p>
              <p>{getTotalCartAmout()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tax</p>
              <p>{getTotalCartAmout() === 0 ? 0 : 2}</p>
            </div>
            <hr />

            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmout() === 0 ? 0 : getTotalCartAmout() + 2}</b>
            </div>
          </div>
          <button>Processed to payment</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
