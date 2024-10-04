import React from 'react';
import ActionBar from './ActionBar';

const ChatResponse = ({ response }: { response: string }) => {
  return (
    <div className='mr-auto w-[92%] md:my-8 md:w-[85%]'>
      <p className='font-medium'>{response}</p>
      <ActionBar />
    </div>
  );
};

export default ChatResponse;
