import userModel from "../models/userModel.js";
import foodModel from "../models/foodModel.js";

// Add to cart
const addToCart = async (req, res) => {
  try {
    const { userId, itemId, hours, startDate, startTime, endDate, endTime } = req.body;

    let userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    const food = await foodModel.findById(itemId);
    if (!food) return res.json({ success: false, message: "Food item not found" });

    const unitPrice = food.price;
    const totalPrice = hours * unitPrice + hours * 10; // Labour cost 10 per hour

    cartData[itemId] = {
      hours,
      startDate,
      startTime,
      endDate,
      endTime,
      unitPrice,
      totalPrice,
      name: food.name,
      image: food.image,
    };

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Added To Cart", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error adding to cart" });
  }
};

// Remove from cart
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;
    let userData = await userModel.findById(userId);
    let cartData = userData.cartData || {};

    if (cartData[itemId]) delete cartData[itemId];

    await userModel.findByIdAndUpdate(userId, { cartData });
    res.json({ success: true, message: "Removed From Cart", cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error removing from cart" });
  }
};

// Get cart
const getCart = async (req, res) => {
  try {
    let userData = await userModel.findById(req.body.userId);
    let cartData = userData.cartData || {};

    // Ensure all items have food info
    for (const itemId in cartData) {
      const food = await foodModel.findById(itemId);
      if (food) {
        cartData[itemId] = {
          ...cartData[itemId],
          name: food.name,
          image: food.image,
          unitPrice: food.price,
          totalPrice: cartData[itemId].hours * food.price + cartData[itemId].hours * 10,
        };
      }
    }

    res.json({ success: true, cartData });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error fetching cart" });
  }
};

export { addToCart, removeFromCart, getCart };
