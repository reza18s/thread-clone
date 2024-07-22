import { useSocketContext } from "@/Context/SocketContext";
import useConversation, { ConversationType } from "@/zustand/UseConversations";

const Conversation = ({
  conversation,
  emoji,
}: {
  conversation: ConversationType;
  emoji: string;
}) => {
  const { setSelectedConversation, selectedConversation } = useConversation();
  const isSelected = selectedConversation?.id === conversation.id;

  const { onlineUsers } = useSocketContext();

  const isOnline = onlineUsers.includes(conversation.id);

  return (
    <>
      <div
        className={`flex cursor-pointer items-center gap-2 rounded p-2 py-1 hover:bg-sky-500 ${isSelected ? "bg-sky-500" : ""}`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-8 rounded-full md:w-12">
            <img src={conversation.profilePic} alt="user avatar" />
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex justify-between gap-3">
            <p className="md:text-md text-sm font-bold text-gray-200">
              {conversation.fullName}
            </p>
            <span className="hidden text-xl md:inline-block">{emoji}</span>
          </div>
        </div>
      </div>

      <div className="divider my-0 h-1 py-0" />
    </>
  );
};
export default Conversation;
