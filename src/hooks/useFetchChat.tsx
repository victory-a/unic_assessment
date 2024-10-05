import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-toastify';

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

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleSend = async (input: string) => {
    if (!input.trim()) return;

    setIsLoading(true);
    const message = { question: input, response: '', uuid: uuidv4() };

    abortControllerRef.current = new AbortController();
    const payload = {
      messages: [{ role: 'user', content: input }],
    };

    try {
      const response = await axios.post('/api/llm', payload, {
        signal: abortControllerRef.current.signal,
      });

      const data = { question: message.question, response: response.data.content, uuid: message.uuid };

      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, data];

        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      if (editingUuid) {
        setEditingUuid(null);
      }
      setValue('');
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error('Request canceled', error.message);
        toast('Request canceled', { type: 'error' });
      } else {
        toast('Error sending message', { type: 'error' });
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
      setValue('');
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
