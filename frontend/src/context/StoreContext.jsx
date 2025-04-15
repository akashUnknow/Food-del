import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setcartItems] = useState({});
  const url = "http://localhost:4000";
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem("token");

    async function loadData() {
      await fetchFoodList();
      if (token) {
        setToken(token);
        await loadCartdata(localStorage.getItem("token"));
        // console.log("cart data loaded");
      }
    }
    loadData();
  }, []);
  const addTocart = async (itemId) => {
    if (!cartItems[itemId]) {
      setcartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      await axios.post(
        `${url}/api/cart/add`,
        { itemId },
        { headers: { token } }
      );
    }
  };

  const removeFromCart = (itemId) => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    if (token) {
      axios.post(`${url}/api/cart/remove`, { itemId }, { headers: { token } });
    }
  };
  const getTotalCartAmout = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const item = food_list.find((item) => item._id === itemId);
        total += item.price * cartItems[itemId];
      }
    }
    return total;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    setFoodList(response.data.data);
  };

  const loadCartdata = async (token) => {
    if (token) {
      try {
        const response = await axios.post(
          `${url}/api/cart/get`,
          {}, // empty body
          {
            headers: {
              token: token, // or simply { token } if key and variable name are same
            },
          }
        );
        // console.log("cart data loaded");
        setcartItems(response.data.cartData);
      } catch (error) {
        console.error("Error fetching cart data:", error);
      }
    }
  };

  const contextValue = {
    food_list,
    cartItems,
    setcartItems,
    addTocart,
    removeFromCart,
    getTotalCartAmout,
    url,
    token,
    setToken,
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
