import express from "express";
import { protect } from "../controllers/authController";
import { getMessage, sendMessage } from "../controllers/messageController";

const messageRoutes = express.Router();

messageRoutes.post("/send/:id", protect, sendMessage);
messageRoutes.get("/:id", protect, getMessage);

export default messageRoutes;
