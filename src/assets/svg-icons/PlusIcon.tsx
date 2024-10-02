import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const PlusIcon = ({ className, height = 12, width = 11, fill = '2D2D2D' }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 11 12'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <g clipPath='url(#clip0_1_23)'>
        <path
          d='M6 1.875V1.125H4.5V1.875V5.25H1.125H0.375V6.75H1.125H4.5V10.125V10.875H6V10.125V6.75H9.375H10.125V5.25H9.375H6V1.875Z'
          fill={fill}
        />
      </g>
      <defs>
        <clipPath id='clip0_1_23'>
          <rect width='10.5' height='12' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default PlusIcon;
