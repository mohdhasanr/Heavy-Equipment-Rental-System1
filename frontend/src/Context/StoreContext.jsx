import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { menu_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:4000"; // backend URL
  const [food_list, setFoodList] = useState([]);
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const currency = "₹";
  const labourCostPerHour = 10;

  // Add item to cart
  const addToCart = async (itemId, rentalInfo) => {
    const foodItem = food_list.find((f) => f._id === itemId);
    if (!foodItem) return;

    const { name, price: unitPrice, image } = foodItem;
    const totalPrice = rentalInfo.hours * unitPrice; // base item price
    const totalWithLabour = totalPrice + rentalInfo.hours * labourCostPerHour;

    const newItem = {
      _id: itemId,
      ...rentalInfo,
      name,
      unitPrice,
      totalPrice: totalWithLabour,
      image,
    };

    setCartItems((prev) => ({
      ...prev,
      [itemId]: newItem,
    }));

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/add",
          { userId: null, itemId, ...rentalInfo, totalPrice: totalWithLabour },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Error adding to cart:", error);
      }
    }
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });

    if (token) {
      try {
        await axios.post(
          url + "/api/cart/remove",
          { userId: null, itemId },
          { headers: { token } }
        );
      } catch (error) {
        console.error("Error removing from cart:", error);
      }
    }
  };

  // Get total cart amount including labour cost
  const getTotalCartAmount = () => {
    return Object.values(cartItems).reduce((acc, item) => acc + (item.totalPrice || 0), 0);
  };

  // Fetch food list
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(url + "/api/food/list");
      setFoodList(response.data.data || []);
    } catch (error) {
      console.error("Error fetching food list:", error);
    }
  };

  // Load cart from backend
  const loadCartData = async (authToken) => {
    try {
      const response = await axios.post(
        url + "/api/cart/get",
        {},
        { headers: { token: authToken } }
      );
      const backendCart = response.data.cartData || {};

      // Map backend cart to frontend structure
      const mappedCart = {};
      for (const itemId in backendCart) {
        const item = backendCart[itemId];
        const foodItem = food_list.find((f) => f._id === itemId);
        if (!foodItem) continue;

        const totalWithLabour = (item.hours * foodItem.price) + (item.hours * labourCostPerHour);

        mappedCart[itemId] = {
          _id: itemId,
          ...item,
          name: foodItem.name,
          unitPrice: foodItem.price,
          totalPrice: totalWithLabour,
          image: foodItem.image,
        };
      }

      setCartItems(mappedCart);
    } catch (error) {
      console.error("Error loading cart data:", error);
    }
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const localToken = localStorage.getItem("token");
      if (localToken) {
        setToken(localToken);
        await loadCartData(localToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    url,
    food_list,
    menu_list,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    token,
    setToken,
    loadCartData,
    setCartItems,
    currency,
    labourCostPerHour,
  };

  return <StoreContext.Provider value={contextValue}>{props.children}</StoreContext.Provider>;
};

export default StoreContextProvider;
