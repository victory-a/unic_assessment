import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const WriteIcon = ({ className, height = 12, width = 12 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={clsMerge(className)}
      viewBox='0 0 12 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g clipPath='url(#clip0_1_103)'>
        <path
          d='M3.375 6.375L3 9L5.625 8.625L10.2352 4.01484L7.98516 1.76484L3.375 6.375ZM12 2.25L9.75 0L8.51484 1.23516L10.7648 3.48516L12 2.25ZM0.75 1.5H0V2.25V11.25V12H0.75H9.75H10.5V11.25V7.5V6.75H9V7.5V10.5H1.5V3H4.5H5.25V1.5H4.5H0.75Z'
          fill='#E4E4E4'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_103'>
          <rect width='12' height='12' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default WriteIcon;
