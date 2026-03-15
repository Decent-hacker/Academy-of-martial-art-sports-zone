import express from "express";
import authRoutes from "./authRoutes.js";
import studentRoutes from "./studentRoutes.js";
import courseRoutes from "./courseRoutes.js";
import eventRoutes from "./eventRoutes.js";
import productRoutes from "./productRoutes.js";
import orderRoutes from "./orderRoutes.js";
import paymentRoutes from "./paymentRoutes.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/students", studentRoutes);
router.use("/courses", courseRoutes);
router.use("/events", eventRoutes);
router.use("/products", productRoutes);
router.use("/orders", orderRoutes);
router.use("/payments", paymentRoutes);

router.post("/contact", asyncHandler((req, res) => res.json({ message: "Contact saved" })));

export default router;
