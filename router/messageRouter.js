import express from "express";
import { getAllMessages, sendMessage,deleteMessage } from "../controller/messageController.js";
import { isAuthenticated } from "../middlewears/auth.js";

const router = express.Router();

router.post("/send", sendMessage);
router.get("/getAll",getAllMessages)
router.delete("/delete/:id", isAuthenticated, deleteMessage);
//router.get("/getall", isAuthenticated, getAllMessages);

export default router;