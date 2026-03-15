import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { getProducts, getProduct, addProduct, updateProduct, deleteProduct } from "../controllers/productController.js";

const router = express.Router();

router.get("/", asyncHandler(getProducts));
router.get("/:id", asyncHandler(getProduct));
router.post("/", authMiddleware, roleMiddleware("admin"), asyncHandler(addProduct));
router.put("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(updateProduct));
router.delete("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(deleteProduct));

export default router;
