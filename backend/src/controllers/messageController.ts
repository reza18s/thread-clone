import { Response } from "express";
import Conversation from "../Models/conversationModel";
import { catchAsync } from "../util/catchAsync";
import { IRequest } from "../types";
import { Message } from "../Models/messageModel";

export const sendMessage = catchAsync(async (req: IRequest, res: Response) => {
  const { message } = req.body;
  const { id: receiverId } = req.params;
  const senderId = req.user._id;
  console.log(message, receiverId);

  let conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });

  if (!conversation) {
    conversation = await Conversation.create({
      participants: [senderId, receiverId],
    });
  }
  const newMessage = await Message.create({
    sender: senderId,
    receiver: receiverId,
    body: message,
  });
  if (!newMessage) {
    return res.status(400).json({ status: "fail" });
  }
  await conversation.updateOne({ $push: { messages: newMessage._id } });
  return res.status(200).json({ status: "success" });
});
export const getMessage = catchAsync(async (req: IRequest, res: Response) => {
  const { id: receiverId } = req.params;
  const senderId = req.user._id;

  const conversation = await Conversation.findOne({
    participants: { $all: [senderId, receiverId] },
  });
  console.log(conversation);

  if (!conversation) return res.status(200).json([]);
  const { messages } = conversation;
  res.status(200).json({ status: "success", messages });
});
