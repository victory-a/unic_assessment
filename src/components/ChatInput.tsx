import PaperPlaneIcon from '@/assets/svg-icons/PaperPlaneIcon';
import React from 'react';
import ActionButton from './ActionButton';
import CommandIcon from '@/assets/svg-icons/CommandIcon';
import QuoteIcon from '@/assets/svg-icons/QuoteIcon';
import UserIcon from '@/assets/svg-icons/UserIcon';
import PlusIcon from '@/assets/svg-icons/PlusIcon';

const ChatInput = () => {
  const [value, setValue] = React.useState('');
  const textareaRef = React.useRef<HTMLTextAreaElement>(null);

  const adjustHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  React.useEffect(() => {
    adjustHeight();
  }, []);

  return (
    <div>
      <form className='input mb-4 flex w-full items-center rounded-md border border-foreground bg-background px-5'>
        <textarea
          autoFocus
          name='query'
          ref={textareaRef}
          className='placeholder:text-grey-600 mt-3 max-h-[13rem] w-full resize-none overflow-y-hidden rounded-md bg-background leading-relaxed outline-none placeholder:text-sm'
          placeholder="Type '/' for quick access to the command menu. Use '||' to enter multiple prompts."
          onInput={adjustHeight}
          onChange={(e) => setValue(e.target.value)}
          style={{ maxHeight: '12rem', overflowY: 'scroll' }}
        ></textarea>

        <div className='text-grey-700 mx-2 flex items-center text-nowrap rounded-sm p-2 disabled:opacity-40'>
          <span className='mr-3 text-sm'>⌘↵ Send</span>
          <button
            className='flex h-[2.3rem] w-[2.3rem] cursor-pointer items-center justify-center rounded-full p-1 hover:bg-green-100 disabled:bg-transparent disabled:opacity-40'
            disabled={!value}
          >
            <PaperPlaneIcon />
          </button>
        </div>
      </form>
      <div className='mb-4 flex flex-wrap gap-x-[1.75rem] gap-y-1.5'>
        <ActionButton label='Commands' icon={<CommandIcon />} />
        <ActionButton label='Prompts' icon={<QuoteIcon />} disabled />
        <ActionButton label='Personas' icon={<UserIcon />} disabled />
        <ActionButton label='Add' icon={<PlusIcon width={14.62} height={14.62} fill='#fff' />} disabled />
      </div>
    </div>
  );
};

export default ChatInput;
