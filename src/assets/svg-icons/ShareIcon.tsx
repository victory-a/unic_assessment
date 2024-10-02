import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const ShareIcon = ({ className, height = 12, width = 13 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 13 12'
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <path
        d='M12.5 4.875L8 9H7.25V6.75H5.375C3.92422 6.75 2.75 7.92422 2.75 9.375C2.75 10.5 3.5 11.25 3.5 11.25C3.5 11.25 0.5 10.125 0.5 7.125C0.5 4.84688 2.34688 3 4.625 3H7.25V0.75H8L12.5 4.875Z'
        fill='#E4E4E4'
      />
    </svg>
  );
};

export default ShareIcon;
