import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const CopyIcon = ({ className, height = 12, width = 13 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 13 12'
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <g clipPath='url(#clip0_1_126)'>
        <path
          d='M7.25 10.5H2V5.25H3.5V3.75H2H0.5V5.25V10.5V12H2H7.25H8.75V10.5V9H7.25V10.5ZM12.5 8.25V0H4.25V8.25H12.5Z'
          fill='#E4E4E4'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_126'>
          <rect width='12' height='12' fill='white' transform='translate(0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CopyIcon;
