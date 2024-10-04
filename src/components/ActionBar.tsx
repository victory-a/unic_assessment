import CopyIcon from '@/assets/svg-icons/CopyIcon';
import DownloadIcon from '@/assets/svg-icons/DownloadIcon';
import SplitIcon from '@/assets/svg-icons/SplitIcon';
import React from 'react';

interface IActionBar {
  edit?: boolean;
  onEdit?: () => void;
}

const ActionBar = ({ edit, onEdit = () => {} }: IActionBar) => {
  return (
    <div className='mt-3 flex h-9 w-[7.5rem] items-center justify-evenly gap-1 rounded-md bg-foreground'>
      {edit ? (
        <button onClick={onEdit} className='text-xs hover:text-red-400'>
          Edit
        </button>
      ) : null}

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
