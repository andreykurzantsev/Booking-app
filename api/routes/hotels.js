import express from "express";
import hotelController from "../controllers/hotelController.js";

const router = express.Router();

router.post("/", hotelController.createHotel);
router.get("/", hotelController.giveAllHotels);
router.get("/:id", hotelController.giveOneHotel);
router.put("/:id", hotelController.updateHotel);
router.delete("/:id", hotelController.deleteHotel);

export default router;