import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const GlobeIcon = ({ className, height = 18, width = 18 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 18 18'
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <g clip-path='url(#clip0_1_229)'>
        <path
          d='M1.52305 5.46055L2.625 6.5625H3.9375L5.25 7.875V9.625L6.125 10.5V12.25H7.875V10.9375L9.625 9.1875V7H6.125L5.25 6.125V5.25H7.4375V4.375L6.5625 3.5V3.0625L7.4375 2.1875V1.32891C7.29258 1.31797 7.14766 1.3125 7 1.3125C4.39141 1.3125 2.1957 3.06797 1.52305 5.46055ZM12.6875 7C12.6875 5.99102 12.425 5.04492 11.9656 4.22187L10.9375 5.25V7.4375H12.6711C12.682 7.29258 12.6875 7.14766 12.6875 7ZM0 7C0 5.14348 0.737498 3.36301 2.05025 2.05025C3.36301 0.737498 5.14348 0 7 0C8.85652 0 10.637 0.737498 11.9497 2.05025C13.2625 3.36301 14 5.14348 14 7C14 8.85652 13.2625 10.637 11.9497 11.9497C10.637 13.2625 8.85652 14 7 14C5.14348 14 3.36301 13.2625 2.05025 11.9497C0.737498 10.637 0 8.85652 0 7Z'
          fill='#E4E4E4'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_229'>
          <rect width='14' height='14' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default GlobeIcon;
