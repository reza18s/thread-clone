import { model, Schema } from "mongoose";

const MessageModel = new Schema({
  body: {
    type: String,
    required: [true, "body is required!"],
  },
  sender: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "from is required!"],
  },
  receiver: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: [true, "to is required!"],
  },
  createdAt: { type: Date, default: new Date().toISOString() },
  updatedAt: { type: Date, default: new Date().toISOString() },
});
export const Message = model("Message", MessageModel);
