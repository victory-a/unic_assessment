import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const DownloadIcon = ({ className, height = 12, width = 10 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 10 12'
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <g clip-path='url(#clip0_1_129)'>
        <path
          d='M5.52969 8.02969L5 8.56172L4.47031 8.03203L1.47031 5.03203L0.938281 4.5L2 3.43828L2.52969 3.96797L4.25 5.68828V1.5V0.75H5.75V1.5V5.68828L7.47031 3.96797L8 3.43828L9.06172 4.5L8.53203 5.02969L5.53203 8.02969H5.52969ZM1.25 9.75H8.75H9.5V11.25H8.75H1.25H0.5V9.75H1.25Z'
          fill='#E4E4E4'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_129'>
          <rect width='9' height='12' fill='white' transform='translate(0.5)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default DownloadIcon;
