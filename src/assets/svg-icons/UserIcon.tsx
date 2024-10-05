import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';
const UserIcon = ({ className, height = 16, width = 15 }: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
      viewBox='0 0 15 16'
    >
      <g clipPath='url(#clip0_1_161)'>
        <path
          d='M7.75 8C8.81087 8 9.82828 7.57857 10.5784 6.82843C11.3286 6.07828 11.75 5.06087 11.75 4C11.75 2.93913 11.3286 1.92172 10.5784 1.17157C9.82828 0.421427 8.81087 0 7.75 0C6.68913 0 5.67172 0.421427 4.92157 1.17157C4.17143 1.92172 3.75 2.93913 3.75 4C3.75 5.06087 4.17143 6.07828 4.92157 6.82843C5.67172 7.57857 6.68913 8 7.75 8ZM14.75 16L12.75 9.5H2.75L0.75 16H14.75Z'
          fill='white'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_161'>
          <rect width='14' height='16' fill='white' transform='translate(0.75)' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default UserIcon;
