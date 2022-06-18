import express from "express";
import hotelController from "../controllers/hotelController.js";
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, hotelController.createHotel);
router.get("/", hotelController.giveAllHotels);
router.get("/:id", hotelController.giveOneHotel);
router.put("/:id", verifyAdmin, hotelController.updateHotel);
router.delete("/:id", verifyAdmin, hotelController.deleteHotel);

export default router;