import React from 'react';
import SideBar from './SideBar';

const MobileSidebar = ({ onClose }: { onClose: () => void }) => {
  return (
    <div
      id='nav-translate'
      className='absolute top-0 z-40 flex h-[100dvh] w-[100%] translate-x-[-550px] justify-between backdrop-blur-sm duration-500'
      style={{ transform: 'translateX(0px)' }}
    >
      <button onClick={onClose} className='absolute right-4 top-2 flex h-[30px] w-[30px] items-center justify-center'>
        <svg
          className='text-white'
          width='30'
          height='30'
          viewBox='0 0 30 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
          ></path>
        </svg>
      </button>

      <div className='bg- h-[100dvh]'>
        <SideBar />
      </div>
    </div>
  );
};

export default MobileSidebar;
