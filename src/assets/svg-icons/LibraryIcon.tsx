import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const LibraryIcon = ({ className, height = 12, width = 11 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 11 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <g clipPath='url(#clip0_1_33)'>
        <path
          d='M2.25 0C1.00781 0 0 1.00781 0 2.25V9.75C0 10.9922 1.00781 12 2.25 12H9H9.75H10.5V10.5H9.75V9H10.5V0H9.75H9H2.25ZM2.25 9H8.25V10.5H2.25C1.83516 10.5 1.5 10.1648 1.5 9.75C1.5 9.33516 1.83516 9 2.25 9Z'
          fill='#E4E4E4'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_33'>
          <rect width='10.5' height='12' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LibraryIcon;
