import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createOrder, myOrders, allOrders, updateStatus } from "../controllers/orderController.js";

const router = express.Router();

router.post("/create", authMiddleware, asyncHandler(createOrder));
router.get("/my-orders", authMiddleware, asyncHandler(myOrders));
router.get("/", authMiddleware, roleMiddleware("admin"), asyncHandler(allOrders));
router.put("/:id/status", authMiddleware, roleMiddleware("admin"), asyncHandler(updateStatus));

export default router;
