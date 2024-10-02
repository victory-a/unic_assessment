import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const CommandIcon = ({ className, height = 18, width = 18 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 18 18'
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <rect x='0.7' y='0.7' width='16.6' height='16.6' rx='3.3' stroke='#F0F0F0' stroke-width='1.4' />
      <g clip-path='url(#clip0_1_151)'>
        <path d='M12.2461 4H10.8574L6 14H7.38867L12.2461 4Z' fill='#F0F0F0' />
      </g>
      <defs>
        <clipPath id='clip0_1_151'>
          <rect width='6.25' height='10' fill='white' transform='translate(6 4)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CommandIcon;
