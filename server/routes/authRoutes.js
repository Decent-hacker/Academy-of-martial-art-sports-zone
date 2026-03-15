import express from "express";
import { body } from "express-validator";
import { register, login, profile, updateProfile, logout } from "../controllers/authController.js";
import { authLimiter } from "../middleware/rateLimiter.js";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { validate } from "../middleware/validator.js";
import { asyncHandler } from "../middleware/asyncHandler.js";

const router = express.Router();

router.post(
  "/register",
  authLimiter,
  validate([body("email").isEmail(), body("password").isLength({ min: 6 }), body("name").notEmpty()]),
  asyncHandler(register)
);
router.post("/login", authLimiter, validate([body("email").isEmail(), body("password").notEmpty()]), asyncHandler(login));
router.get("/profile", authMiddleware, asyncHandler(profile));
router.put("/profile", authMiddleware, asyncHandler(updateProfile));
router.post("/logout", authMiddleware, asyncHandler(logout));

export default router;
