import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

export interface IMessage {
  question: string;
  response: string;
  uuid: string;
}

const useFetchChat = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [value, setValue] = useState('');
  const [messages, setMessages] = useState<IMessage[]>([] as IMessage[]);
  const [editingUuid, setEditingUuid] = useState<string | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const savedMessages = localStorage.getItem('chatMessages');
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, []);

  const handleSend = async () => {
    if (!value.trim()) return;

    setIsLoading(true);
    const message = { question: value, response: '', uuid: uuidv4() };

    abortControllerRef.current = new AbortController();
    const payload = {
      messages: [{ role: 'user', content: value }],
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

      setValue('');
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error('Request canceled', error.message);
      } else {
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

  const handleSaveEdit = async () => {
    if (!value.trim()) return;

    setIsLoading(true);
    abortControllerRef.current = new AbortController();

    try {
      const response = await axios.post(
        '/api/llm',
        {
          messages: [{ role: 'user', content: value }],
        },
        {
          signal: abortControllerRef.current.signal,
        },
      );

      const data = {
        question: value,
        response: response.data.content,
        uuid: uuidv4(),
      };

      // Update messages with the new LLM response
      setMessages((prevMessages) => {
        const updatedMessages = [...prevMessages, data];
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
        return updatedMessages;
      });

      setEditingUuid(null);
      setValue('');
    } catch (error) {
      if (axios.isCancel(error)) {
        console.error('Request canceled', error.message);
      } else {
        console.error('Error sending message:', error);
      }
    } finally {
      setIsLoading(false);
      abortControllerRef.current = null; // Reset the controller
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
    value,
    messages,
    editingUuid,
    setValue,
    handleSend,
    handleEdit,
    handleSaveEdit,
    handleStop,
  };
};

export default useFetchChat;
