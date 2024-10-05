import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const QuoteIcon = ({ className, height = 18, width = 16 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox='0 0 16 18'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <g clipPath='url(#clip0_1_157)'>
        <path
          d='M0 7.59375C0 5.26289 1.88789 3.375 4.21875 3.375H4.5H5.625V5.625H4.5H4.21875C3.13242 5.625 2.25 6.50742 2.25 7.59375V7.875H6.75V14.625H0V11.25V7.875V7.59375ZM9 7.59375C9 5.26289 10.8879 3.375 13.2188 3.375H13.5H14.625V5.625H13.5H13.2188C12.1324 5.625 11.25 6.50742 11.25 7.59375V7.875H15.75V14.625H9V11.25V7.875V7.59375Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_157'>
          <rect width='15.75' height='18' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default QuoteIcon;
