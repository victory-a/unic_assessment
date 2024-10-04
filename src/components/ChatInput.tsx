import PaperPlaneIcon from '@/assets/svg-icons/PaperPlaneIcon';
import React from 'react';
import ActionButton from './ActionButton';
import CommandIcon from '@/assets/svg-icons/CommandIcon';
import QuoteIcon from '@/assets/svg-icons/QuoteIcon';
import UserIcon from '@/assets/svg-icons/UserIcon';
import PlusIcon from '@/assets/svg-icons/PlusIcon';
import { HalfCircularProgress } from '@/assets/svg-icons/ProgressIcon';
import Spinner from './Spinner';

interface IChatInput {
  onToggleCommandsModal: () => void;
  value: string;
  setValue: (val: string) => void;
  handleSend: () => void;
  handleStop: () => void;
  isLoading: boolean;
}

const ChatInput = ({ onToggleCommandsModal, value, setValue, handleSend, handleStop, isLoading }: IChatInput) => {
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const resetHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = ''; // Reset the inline height property
    }
  };

  function triggerSend() {
    resetHeight();
    handleSend();
  }

  React.useEffect(() => {
    adjustHeight();

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  return (
    <div>
      <div className='input mb-4 flex w-full items-center rounded-md border border-foreground bg-background px-5'>
        <textarea
          rows={3}
          ref={textareaRef}
          className='no-scrollbar mt-3 min-h-9 w-full resize-none overflow-y-hidden rounded-md bg-background leading-relaxed outline-none placeholder:text-sm placeholder:text-grey-600'
          placeholder="Type '/' for quick access to the command menu. Use '||' to enter multiple prompts."
          onInput={adjustHeight}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          style={{ maxHeight: '12rem', overflowY: 'scroll' }}
          disabled={isLoading}
        ></textarea>

        <div className='mx-2 flex items-center text-nowrap rounded-sm p-2 text-grey-700 disabled:opacity-40'>
          <span className='mr-3 text-sm'>⌘↵ Send</span>
          {isLoading ? (
            <StopButton handleClick={handleStop} value={value} isLoading={isLoading} />
          ) : (
            <SendButton handleClick={triggerSend} value={value} isLoading={isLoading} />
          )}
        </div>
      </div>
      <div className='mb-4 flex flex-wrap gap-x-5 gap-y-1.5'>
        <ActionButton label='Commands' icon={<CommandIcon />} handleClick={onToggleCommandsModal} />
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

interface IConfirmButton {
  value: string;
  isLoading: boolean;
  handleClick: () => void;
}

function SendButton({ value, isLoading, handleClick }: IConfirmButton) {
  return (
    <button
      className='flex h-[2.3rem] w-[2.3rem] cursor-pointer items-center justify-center rounded-full p-1 hover:bg-green-100 disabled:cursor-not-allowed disabled:bg-transparent disabled:opacity-40'
      disabled={!value || isLoading}
      onClick={handleClick}
    >
      <PaperPlaneIcon />
    </button>
  );
}

function StopButton({ value, handleClick }: IConfirmButton) {
  return (
    <button
      className='flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white px-2 py-[4px] text-white hover:border-red-400 disabled:cursor-not-allowed'
      disabled={!value}
      onClick={handleClick}
    >
      Stop
      <Spinner />
    </button>
  );
}
