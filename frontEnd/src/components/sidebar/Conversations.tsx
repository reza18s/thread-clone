import useGetConversations from "@/Hooks/getConversation";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { conversations, loading } = useGetConversations();
  return (
    <div className="flex flex-col overflow-auto py-2">
      {conversations.map((conversation) => (
        <Conversation
          key={conversation.id}
          conversation={conversation}
          emoji={getRandomEmoji()}
        />
      ))}
      {loading ? <span className="loading loading-spinner mx-auto" /> : null}
    </div>
  );
};
export default Conversations;
