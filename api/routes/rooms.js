import express from "express";
import roomController from "../controllers/roomController.js";
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/:hotelId", verifyAdmin, roomController.createRoom);
router.get("/", roomController.giveAllRooms);
router.get("/:id", roomController.giveOneRoom);
router.put("/:id", verifyAdmin, roomController.updateRoom);
router.delete("/:id/:hotelId", verifyAdmin, roomController.deleteRoom);

export default router;