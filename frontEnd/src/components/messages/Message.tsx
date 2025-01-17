import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation, { MessageType } from "../../zustand/useConversation";

const Message = ({ message }: { message: MessageType }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();

  const fromMe = message?.senderId === authUser?.id;
  const img = fromMe ? authUser?.profilePic : selectedConversation?.profilePic;
  const chatClass = fromMe ? "chat-end" : "chat-start";

  const bubbleBg = fromMe ? "bg-blue-500" : "";
  const shakeClass = message.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClass}`}>
      <div className="avatar chat-image hidden md:block">
        <div className="w-6 rounded-full md:w-10">
          <img alt="Tailwind CSS chat bubble component" src={img} />
        </div>
      </div>
      <p
        className={`chat-bubble text-white ${bubbleBg} ${shakeClass} md:text-md text-sm`}
      >
        {message.body}
      </p>
      <span className="chat-footer flex items-center gap-1 text-xs text-white opacity-50">
        {extractTime(message.createdAt)}
      </span>
    </div>
  );
};
export default Message;
