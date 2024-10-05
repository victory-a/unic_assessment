import React from 'react';
import { clsMerge } from '@/utils/classname-merge';

import Dialog from '@/components/Dialog';
import CancelIcon, { CancelIconOutline } from '@/assets/svg-icons/CancelIcon';
import CompleteIcon from '@/assets/svg-icons/CompleteIcon';
import { defaultValues } from '@/context/ActionModalsContext';

interface IScrapingModal {
  isOpen: boolean;
  onClose: () => void;
  handleCancelAll: () => void;
}

const scrapingQueue = [
  { completed: true, title: 'Cyprus - Cyprus Mail', url: 'cyprus-mail.com', id: '1' },
  { completed: false, title: 'Cyprus Mail', url: 'cyprus-mail.com', id: '1' },
  { completed: false, title: 'Breaking News, Latest News', url: 'edition.cnn.com', id: '1' },
  { completed: true, title: 'Cyprus News - Google Search', url: 'google.com', id: '1' },
];

const ScrapingModal = ({ isOpen, onClose, handleCancelAll }: IScrapingModal) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className='relative w-full min-w-[350px] rounded-md rounded-t-md bg-foreground bg-grey-1000 pt-2 sm:min-w-[500px] lg:w-[90%] lg:max-w-[35.75rem]'>
        <div className='absolute right-1 top-1'>
          <button
            onClick={onClose}
            className='relative flex h-7 w-7 items-center justify-center rounded-full hover:bg-grey-700'
          >
            <CancelIcon />
          </button>
        </div>
        <div className='p-6'>
          {scrapingQueue.map((item) => (
            <SingleScrapeProcess
              key={item.id}
              title='Cyprus - Cyprus Mail'
              url='cyprus-mail.com'
              completed={item.completed}
            />
          ))}
        </div>
        <div className='flex items-center justify-between rounded-b-md bg-grey-200 px-6 py-3.5'>
          <div className='flex items-center'>
            <button
              onClick={handleCancelAll}
              className='relative mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground hover:bg-grey-700'
            >
              <CancelIcon />
            </button>
            <p className='text-sm text-grey-900'>Cancel All</p>
          </div>
          <p className='text-xs text-grey-1100'>Searching 8 of 10</p>
        </div>
      </div>
    </Dialog>
  );
};

export default ScrapingModal;

interface ISingleScrapeProcess {
  completed: boolean;
  title: string;
  url: string;
}
const SingleScrapeProcess = ({ completed, title, url }: ISingleScrapeProcess) => {
  return (
    <div className='flex items-center justify-between border-b border-[#3C3C3C] py-4'>
      <div className='flex items-center gap-2.5'>
        {completed ? (
          <CompleteIcon />
        ) : (
          <button className='group mr-2'>
            <CancelIconOutline />
          </button>
        )}
        <div>
          <h3 className='text-sm font-semibold text-grey-900'>{title}</h3>
          <p className='text-xs font-medium text-grey-1100'>{url}</p>
        </div>
      </div>
      <p className={clsMerge('text-xs font-medium', completed ? 'text-green-200' : 'text-grey-1100')}>
        {completed ? 'Complete' : 'Accessing'}
      </p>
    </div>
  );
};
