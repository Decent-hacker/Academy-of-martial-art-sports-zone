import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createOrder, verify, history } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/razorpay/create-order", authMiddleware, asyncHandler(createOrder));
router.post("/razorpay/verify", authMiddleware, asyncHandler(verify));
router.get("/history", authMiddleware, asyncHandler(history));

export default router;
