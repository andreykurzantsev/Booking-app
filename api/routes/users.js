import express, { Router } from "express";
import userController from "../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.get("/", verifyAdmin, userController.giveAllUsers);
router.get("/:id", verifyUser, userController.giveOneUser);
router.put("/:id", verifyUser, userController.updateUser);
router.delete("/:id", verifyUser, userController.deleteUser);

export default router;