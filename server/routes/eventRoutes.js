import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { roleMiddleware } from "../middleware/roleMiddleware.js";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { getEvents, getEvent, createEvent, updateEvent, deleteEvent, registerEvent } from "../controllers/eventController.js";

const router = express.Router();

router.get("/", asyncHandler(getEvents));
router.get("/:id", asyncHandler(getEvent));
router.post("/", authMiddleware, roleMiddleware("admin"), asyncHandler(createEvent));
router.put("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(updateEvent));
router.delete("/:id", authMiddleware, roleMiddleware("admin"), asyncHandler(deleteEvent));
router.post("/:id/register", authMiddleware, asyncHandler(registerEvent));

export default router;
