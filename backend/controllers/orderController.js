import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

const labourCostPerHour = 10;

// Place COD order
const placeOrderCod = async (req, res) => {
  try {
    const { userId, items, address } = req.body;

    // Enrich items with labourCost and totalPrice
    const enrichedItems = items.map(item => {
      const labourCost = item.hours * labourCostPerHour;
      const totalPrice = item.unitPrice * item.hours + labourCost;
      return {
        ...item,
        labourCost,
        totalPrice
      };
    });

    // Calculate total order amount
    const totalAmount = enrichedItems.reduce((sum, item) => sum + item.totalPrice, 0);

    // Create order
    const newOrder = new orderModel({
      userId,
      items: enrichedItems,
      amount: totalAmount,
      address,
      payment: true
    });

    await newOrder.save();

    // Clear user cart
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ success: true, message: "Order Placed", orderId: newOrder._id });
  } catch (error) {
    console.error("Error placing COD order:", error);
    res.status(500).json({ success: false, message: "Error placing order" });
  }
};

// Get user orders
const userOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ userId: req.body.userId });
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

// Verify payment
const verifyOrder = async (req, res) => {
  const { orderId, success } = req.body;
  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      res.json({ success: true, message: "Paid" });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ success: false, message: "Not Paid" });
    }
  } catch (error) {
    console.error("Error verifying order:", error);
    res.status(500).json({ success: false, message: "Verification failed" });
  }
};

// Admin: List all orders
const listOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ success: true, data: orders });
  } catch (error) {
    console.error("Error fetching orders for admin:", error);
    res.status(500).json({ success: false, message: "Error fetching orders" });
  }
};

export { placeOrderCod, userOrders, verifyOrder, listOrders };
