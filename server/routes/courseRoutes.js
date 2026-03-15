import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { getCourses, getCourse, createCourse, updateCourse, deleteCourse, enroll } from "../controllers/courseController.js";

const router = express.Router();

router.get("/", asyncHandler(getCourses));
router.get("/:id", asyncHandler(getCourse));
router.post("/", authMiddleware, roleMiddleware("admin"), asyncHandler(createCourse));
router.put("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(updateCourse));
router.delete("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(deleteCourse));
router.post("/:id/enroll", authMiddleware, asyncHandler(enroll));

export default router;
