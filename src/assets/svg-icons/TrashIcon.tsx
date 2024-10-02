import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const TrashIcon = ({ className, height = 12, width = 11 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 11 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <path
        d='M3.375 0L3 0.75H0V2.25H10.5V0.75H7.5L7.125 0H3.375ZM9.75 3H0.75L1.3125 12H9.1875L9.75 3Z'
        fill='#E4E4E4'
      />
    </svg>
  );
};

export default TrashIcon;
