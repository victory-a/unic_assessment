import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const CloseIcon = ({ className, height = 30, width = 30 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 30 30'
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge('text-white', className)}
    >
      <path
        d='M6.34315 6.34338L17.6569 17.6571M17.6569 6.34338L6.34315 17.6571'
        stroke='currentColor'
        strokeWidth='2'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></path>
    </svg>
  );
};

export default CloseIcon;
