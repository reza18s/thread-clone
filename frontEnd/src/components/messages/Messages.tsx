import React from "react";
import MessageSkeleton from "../skeletons/MessageSkeleton";
import Message from "./Message";
import useGetMessages from "@/Hooks/useGetMessage";
import useListenMessages from "@/Hooks/useLinstenMessage";
import useChatScroll from "@/Hooks/useChatScroll";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  useListenMessages();

  // eslint-disable-next-line no-undef
  const ref = useChatScroll(messages) as React.MutableRefObject<HTMLDivElement>;

  return (
    <div className="flex-1 overflow-auto px-4" ref={ref}>
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}

      {!loading &&
        messages.map((message) => (
          <Message key={message.id} message={message} />
        ))}

      {!loading && messages.length === 0 && (
        <p className="text-center text-white">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};
export default Messages;
