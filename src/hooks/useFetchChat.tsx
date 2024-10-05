import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import useToast from './useToast';

import { replaceWebSearchCommands } from '@/utils/scraperUtils';

export interface IMessage {
  question: string;
  response: string;
  uuid: string;
}

const useFetchChat = ({ setValue }: { setValue: (val: string) => void }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<IMessage[]>([] as IMessage[]);
  const [editingUuid, setEditingUuid] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  const { showToast } = useToast();

  useEffect(() => {
    const savedMessages = sessionStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleSend = async (input: string) => {
    if (!input.trim()) return;

    setIsLoading(true);
    const result = replaceWebSearchCommands(input, ' WEB-SEARCH_SUCCEEDED');
    const message = { question: result, response: '', uuid: uuidv4() };

    abortControllerRef.current = new AbortController();
    const payload = {
      messages: [{ role: 'user', content: result }],
    };

    try {
      const response = await axios.post('/api/llm', payload, {
        signal: abortControllerRef.current.signal,
      });

      const data = { question: message.question, response: response.data.content, uuid: message.uuid };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, data];

        sessionStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      if (editingUuid) {
        setEditingUuid(null);
      }
      setValue('');
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error('Request canceled', error.message);
        showToast({ message: 'Request canceled', variant: 'error' });
      } else {
        showToast({ message: 'Error sending message', variant: 'error' });
        console.error('Error sending message:', error);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  const handleEdit = (uuid: string) => {
    const messageToEdit = messages.find((msg) => msg.uuid === uuid);
    if (messageToEdit) {
      setValue(messageToEdit.question);
      setEditingUuid(uuid);
    }
  };

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort('Request was canceled by the user.');
      console.error('Request has been stopped.');
      setIsLoading(false);
      abortControllerRef.current = null;
    }
  };

  return {
    isLoading,
    messages,
    setValue,
    handleSend,
    handleEdit,
    handleStop,
  };
};

export default useFetchChat;
