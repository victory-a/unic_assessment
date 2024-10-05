import React from 'react';

import { useActionModalsContext } from '@/context/ActionModalsContext';
import { SendButton, StopButton } from './Button';
import ActionButton from './ActionButton';
import Editor from './Editor';

import UserIcon from '@/assets/svg-icons/UserIcon';
import PlusIcon from '@/assets/svg-icons/PlusIcon';
import QuoteIcon from '@/assets/svg-icons/QuoteIcon';
import CommandIcon from '@/assets/svg-icons/CommandIcon';
import { HalfCircularProgress } from '@/assets/svg-icons/ProgressIcon';

interface IChatInput {
  openCommandsModal: () => void;
  handleSend: () => void;
  handleStop: () => void;
  isLoading: boolean;
}

const ChatInput = ({ openCommandsModal, handleSend, handleStop, isLoading }: IChatInput) => {
  const { value, setValue } = useActionModalsContext();

  function triggerSend() {
    handleSend();
  }

  return (
    <div>
      <div className='red-border input mb-4 flex w-full items-center rounded-md border border-foreground bg-background px-5'>
        <Editor content={value} setContent={setValue} isLoading={isLoading} />

        <div className='mx-2 hidden items-center text-nowrap rounded-sm p-2 text-grey-700 disabled:opacity-40 sm:flex'>
          <span className='mr-3 text-sm'>⌘↵ Send</span>
          {isLoading ? (
            <StopButton handleClick={handleStop} value={value} isLoading={isLoading} />
          ) : (
            <SendButton handleClick={triggerSend} value={value} isLoading={isLoading} />
          )}
        </div>
      </div>
      <div className='flex justify-end sm:hidden'>
        {isLoading ? (
          <button
            onClick={handleStop}
            disabled={!value}
            className='mb-3 mt-1 w-32 rounded-md bg-foreground p-2 hover:opacity-70 disabled:cursor-not-allowed'
          >
            Stop
          </button>
        ) : (
          <button
            onClick={triggerSend}
            disabled={!value || isLoading}
            className='mb-3 mt-1 w-32 rounded-md bg-foreground p-2 hover:opacity-70 disabled:cursor-not-allowed'
          >
            Send
          </button>
        )}
      </div>
      <div className='mb-4 flex flex-wrap gap-x-5 gap-y-1.5'>
        <ActionButton label='Commands' icon={<CommandIcon />} handleClick={openCommandsModal} />
        <ActionButton label='Prompts' icon={<QuoteIcon />} disabled={true} />
        <ActionButton label='Personas' icon={<UserIcon />} disabled />
        <ActionButton label='Add' icon={<PlusIcon width={14.62} height={14.62} fill='#fff' />} disabled />

        <div className='ml-auto flex items-center gap-3'>
          <p className='text-[0.8125rem] text-grey-600'>32/618</p>
          <HalfCircularProgress />
        </div>
      </div>
    </div>
  );
};

export default ChatInput;
