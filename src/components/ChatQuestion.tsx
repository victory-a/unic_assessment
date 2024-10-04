import React from 'react';
import ActionBar from './ActionBar';

interface IChatQuestion {
  question: string;
  onEdit: () => void;
}

const ChatQuestion = ({ question, onEdit }: IChatQuestion) => {
  return (
    <div className='my-3 ml-auto w-[92%] md:my-8 md:w-[85%]'>
      <div className='rounded-xl bg-foreground p-3 md:p-7'>
        <p className='font-medium'>{question}</p>
      </div>
      <div className='flex items-center justify-end'>
        <ActionBar edit onEdit={onEdit} />
      </div>
    </div>
  );
};

export default ChatQuestion;
