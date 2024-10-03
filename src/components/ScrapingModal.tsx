import React from 'react';
import { clsMerge } from '@/utils/classname-merge';

import Dialog from '@/components/Dialog';
import CancelIcon, { CancelIconOutline } from '@/assets/svg-icons/CancelIcon';
import CompleteIcon from '@/assets/svg-icons/CompleteIcon';

interface IScrapingModal {
  isOpen: boolean;
  onClose: () => void;
  count?: number;
  total?: number;
  handleCancelOne: (id: string) => void;
  handleCancelAll: () => void;
}

const scrapingQueue = [
  { completed: true, title: 'Cyprus - Cyprus Mail', url: 'cyprus-mail.com', id: '1' },
  { completed: false, title: 'Cyprus Mail', url: 'cyprus-mail.com', id: '1' },
  { completed: false, title: 'Breaking News, Latest News', url: 'edition.cnn.com', id: '1' },
  { completed: true, title: 'Cyprus News - Google Search', url: 'google.com', id: '1' },
];

const ScrapingModal = ({
  isOpen,
  onClose,
  count = 8,
  total = 10,
  handleCancelOne,
  handleCancelAll,
}: IScrapingModal) => {
  return (
    <Dialog isOpen={isOpen} onClose={onClose}>
      <div className='bg-grey-1000 relative w-[90%] max-w-[35.75rem] rounded-t-md pt-2'>
        <div className='absolute right-1 top-1'>
          <button
            onClick={onClose}
            className='hover:bg-grey-700 relative flex h-7 w-7 items-center justify-center rounded-full'
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
              onCancel={() => handleCancelOne(item.id)}
              completed={item.completed}
            />
          ))}
        </div>
        <div className='flex items-center justify-between rounded-b-md bg-grey-200 px-6 py-3.5'>
          <div className='flex items-center'>
            <button
              onClick={handleCancelAll}
              className='hover:bg-grey-700 relative mr-2 flex h-7 w-7 items-center justify-center rounded-full bg-foreground'
            >
              <CancelIcon />
            </button>
            <p className='text-grey-900 text-sm'>Cancel All</p>
          </div>
          <p className='text-grey-1100 text-xs'>
            Searching {count} of {total}
          </p>
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
  onCancel: () => void;
}
const SingleScrapeProcess = ({ completed, title, url, onCancel }: ISingleScrapeProcess) => {
  return (
    <div className='flex items-center justify-between border-b border-[#3C3C3C] py-4'>
      <div className='flex items-center gap-2.5'>
        {completed ? (
          <CompleteIcon />
        ) : (
          <button onClick={onCancel} className='group mr-2'>
            <CancelIconOutline />
          </button>
        )}
        <div>
          <h3 className='text-grey-900 text-sm font-semibold'>{title}</h3>
          <p className='text-grey-1100 text-xs font-medium'>{url}</p>
        </div>
      </div>
      <p className={clsMerge('text-xs font-medium', completed ? 'text-green-200' : 'text-grey-1100')}>
        {completed ? 'Complete' : 'Accessing'}
      </p>
    </div>
  );
};
