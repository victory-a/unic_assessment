import React from 'react';
import SideBar from './SideBar';
import CloseIcon from '@/assets/svg-icons/CloseIcon';

const MobileSidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      id='nav-translate'
      className='absolute top-0 z-40 flex h-[100dvh] w-[100%] translate-x-[-550px] justify-between backdrop-blur-sm duration-500'
      style={{ transform: 'translateX(0px)' }}
    >
      <button onClick={onClose} className='absolute right-4 top-2 flex h-[30px] w-[30px] items-center justify-center'>
        <CloseIcon />
      </button>

      <div className='bg- h-[100dvh]'>
        <SideBar />
      </div>
    </div>
  );
};

export default MobileSidebar;
