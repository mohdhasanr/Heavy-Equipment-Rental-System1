import express from "express";
import { listOrders, placeOrderCod, userOrders, verifyOrder } from "../controllers/orderController.js";
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

// Admin: list all orders
orderRouter.get("/list", listOrders);

// User: list orders
orderRouter.post("/userorders", authMiddleware, userOrders);

// Place COD order
orderRouter.post("/placecod", authMiddleware, placeOrderCod);

// Verify payment
orderRouter.post("/verify", verifyOrder);

export default orderRouter;
