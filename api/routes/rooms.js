import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("this is auth endpoint");
});

router.get("/register", (req, res) => {
    res.send("this is reg endpoint");
});

export default router;