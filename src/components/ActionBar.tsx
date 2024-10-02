import CopyIcon from '@/assets/svg-icons/CopyIcon';
import DownloadIcon from '@/assets/svg-icons/DownloadIcon';
import SplitIcon from '@/assets/svg-icons/SplitIcon';
import React from 'react';

const ActionBar = () => {
  return (
    <div className='mt-[1.5rem] flex h-9 w-[6.75rem] items-center justify-evenly gap-1 rounded-md bg-foreground'>
      <button>
        <CopyIcon />
      </button>
      <button>
        <DownloadIcon />
      </button>
      <button>
        <SplitIcon />
      </button>
    </div>
  );
};

export default ActionBar;
