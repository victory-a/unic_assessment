import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const AppFileIcon = ({ className, height = 11, width = 14 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 14 11'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={clsMerge(className)}
    >
      <g clipPath='url(#clip0_1_59)'>
        <path
          d='M3.09375 10.3125H0V7.21875C0 5.87168 0.861523 4.72656 2.0625 4.30117V4.125C2.0625 2.22578 3.60078 0.6875 5.5 0.6875C6.77402 0.6875 7.88477 1.3793 8.47988 2.41055C8.80645 2.19141 9.20176 2.0625 9.625 2.0625C10.7637 2.0625 11.6875 2.98633 11.6875 4.125V4.89844C12.8734 5.20352 13.75 6.27988 13.75 7.5625V10.3125H11H3.09375ZM4.79102 5.65039L4.42578 6.01562L5.15625 6.74395L5.52148 6.37871L6.35938 5.54082V8.42188V8.9375H7.39062V8.42188V5.54082L8.22852 6.37871L8.59375 6.74395L9.32207 6.01562L8.95684 5.65039L7.23809 3.93164L6.87285 3.56641L6.50762 3.93164L4.78887 5.65039H4.79102Z'
          fill='#E4E4E4'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_59'>
          <rect width='13.75' height='11' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default AppFileIcon;
