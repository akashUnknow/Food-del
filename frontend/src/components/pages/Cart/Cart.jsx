import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmout } =
    useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt={item.title} />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${(cartItems[item._id] * item.price).toFixed(2)}</p>
                  <p className="cross" onClick={() => removeFromCart(item._id)}>
                    X
                  </p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottam">
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
          <button onClick={() => navigate("/PlaceOrder")}>
            Processed to checkOut
          </button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code" />
              <button>submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
