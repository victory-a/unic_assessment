import React from 'react';
import PaperPlaneIcon from '@/assets/svg-icons/PaperPlaneIcon';
import Spinner from './Spinner';

interface IConfirmButton {
  value: string;
  isLoading: boolean;
  handleClick: () => void;
}

export function SendButton({ value, isLoading, handleClick }: IConfirmButton) {
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

export function StopButton({ value, handleClick }: IConfirmButton) {
  return (
    <button
      className='flex cursor-pointer items-center justify-center gap-2 rounded-md border border-white px-2 py-[4px] text-white disabled:cursor-not-allowed'
      disabled={!value}
      onClick={handleClick}
    >
      Stop
      <Spinner />
    </button>
  );
}
