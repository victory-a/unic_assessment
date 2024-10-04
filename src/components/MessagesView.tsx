import React from 'react';

import { IMessage } from '@/hooks/useFetchChat';

import ChatQuestion from './ChatQuestion';
import ChatResponse from './ChatResponse';

interface IMessagesView {
  messages: IMessage[];
  handleEdit: (uuid: string) => void;
}

const MessagesView = ({ messages, handleEdit }: IMessagesView) => {
  // Scroll the last message into view when messages array changes
  const lastMessageRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages.length]);

  return (
    <>
      {messages.map((message, index) => {
        return (
          <div key={message.uuid} ref={index === messages.length - 1 ? lastMessageRef : null}>
            <ChatQuestion question={message.question} onEdit={() => handleEdit(message.uuid)} />
            <ChatResponse response={message.response} />
          </div>
        );
      })}
    </>
  );
};

export default MessagesView;
