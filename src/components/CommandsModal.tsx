import React from 'react';

import Dialog from '@/components/Dialog';
import URLScrapeToggle from './UrlScrapeToggle';
import WebSearchToggle from './WebSearchToggle';

import CommandIcon from '@/assets/svg-icons/CommandIcon';
import CancelIcon from '@/assets/svg-icons/CancelIcon';

interface ICommandsModal {
  isOpen: boolean;
  onClose: () => void;
}

const CommandsModal = ({ isOpen, onClose }: ICommandsModal) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className='w-[90%] max-w-[35.75rem] rounded-md bg-foreground'>
        <div className='flex items-center justify-between border-b border-b-grey-400 px-4 py-3'>
          <div className='flex items-center gap-2'>
            <CommandIcon />
            <h3 className='text-sm font-medium text-white'>Commands</h3>
          </div>
          <button
            onClick={onClose}
            className='hover:bg-grey-700 relative flex h-7 w-7 items-center justify-center rounded-full'
          >
            <CancelIcon />
          </button>
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <WebSearchToggle />
          <URLScrapeToggle />
        </div>
      </div>
    </Dialog>
  );
};

export default CommandsModal;
