import express from "express";
import { body } from "express-validator";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { validate } from "../middleware/validator.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { registerStudent, getStudents, getStudent, updateStudent, deleteStudent, attendance } from "../controllers/studentController.js";

const router = express.Router();

router.post("/register", validate([body("name").notEmpty()]), asyncHandler(registerStudent));
router.get("/", authMiddleware, roleMiddleware("admin"), asyncHandler(getStudents));
router.get("/:id", authMiddleware, asyncHandler(getStudent));
router.put("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(updateStudent));
router.delete("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(deleteStudent));
router.get("/:id/attendance", authMiddleware, asyncHandler(attendance));

export default router;
