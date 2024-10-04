import React from 'react';

import Dialog from '@/components/Dialog';
import URLScrapeToggle from './UrlScrapeToggle';
import WebSearchToggle from './WebSearchToggle';

import { IActionModalsContextType } from '@/context/ActionModalsContext';

import CommandIcon from '@/assets/svg-icons/CommandIcon';
import CancelIcon from '@/assets/svg-icons/CancelIcon';

interface ICommandsModal {
  isOpen: boolean;
  onClose: () => void;
  scrapingFormValues: IActionModalsContextType['scrapingFormValues'];
  webSearchFormValues: IActionModalsContextType['webSearchFormValues'];
  updateFormValues: IActionModalsContextType['updateFormValues'];
  resetFormValues: IActionModalsContextType['resetFormValues'];
}

const CommandsModal = ({
  isOpen,
  onClose,
  resetFormValues,
  updateFormValues,
  scrapingFormValues,
  webSearchFormValues,
}: ICommandsModal) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className='w-full min-w-[350px] rounded-md bg-foreground sm:min-w-[500px] lg:w-[90%] lg:max-w-[35.75rem]'>
        <div className='flex items-center justify-between border-b border-b-grey-400 px-4 py-3'>
          <div className='flex items-center gap-2'>
            <CommandIcon />
            <h3 className='text-sm font-medium text-white'>Commands</h3>
          </div>
          <button
            onClick={onClose}
            className='relative flex h-7 w-7 items-center justify-center rounded-full hover:bg-grey-700'
          >
            <CancelIcon />
          </button>
        </div>
        <div className='flex flex-col gap-2 p-4'>
          <WebSearchToggle
            updateFormValues={updateFormValues}
            formValues={webSearchFormValues}
            resetFormValues={resetFormValues}
          />
          <URLScrapeToggle
            updateFormValues={updateFormValues}
            formValues={scrapingFormValues}
            resetFormValues={resetFormValues}
          />
        </div>
      </div>
    </Dialog>
  );
};

export default CommandsModal;
