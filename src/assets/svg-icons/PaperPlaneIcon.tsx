import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const PaperPlaneIcon = ({ className, height = 19, width = 18 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 18 19'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={clsMerge(className)}
    >
      <g clip-path='url(#clip0_1_146)'>
        <path
          d='M0 10.625L18 0.5L15.75 17.375L9.55547 14.7207L7.3125 18.5L5.625 17.9375V15.125V14L13.5 6.125L4.67578 12.6289L0 10.625Z'
          fill='#E4E4E4'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_146'>
          <rect width='18' height='18' fill='white' transform='translate(0 0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PaperPlaneIcon;
