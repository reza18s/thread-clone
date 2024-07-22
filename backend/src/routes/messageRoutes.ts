import express from "express";
import { protect } from "../controllers/authController";
import {
  getMessage,
  getUserConversations,
  sendMessage,
} from "../controllers/messageController";

const messageRoutes = express.Router();

messageRoutes.get("/conversations", protect, getUserConversations);
messageRoutes.get("/:id", protect, getMessage);
messageRoutes.post("/send/:id", protect, sendMessage);

export default messageRoutes;
