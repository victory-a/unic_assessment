import React from 'react';
import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const ProgressIcon = ({ className, height = 27, width = 26 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 26 27'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={clsMerge(className)}
    >
      <path
        d='M26 13.4999C26 20.6575 20.1976 26.4599 13.04 26.4599C5.88235 26.4599 0.0799561 20.6575 0.0799561 13.4999C0.0799561 6.34225 5.88235 0.539856 13.04 0.539856C20.1976 0.539856 26 6.34225 26 13.4999ZM3.31747 13.4999C3.31747 18.8694 7.67037 23.2223 13.04 23.2223C18.4095 23.2223 22.7624 18.8694 22.7624 13.4999C22.7624 8.13027 18.4095 3.77737 13.04 3.77737C7.67037 3.77737 3.31747 8.13027 3.31747 13.4999Z'
        fill='#2F2F2F'
      />
      <path
        d='M13.04 0.540145C10.9583 0.540145 8.90728 1.04158 7.06044 2.00201L8.55378 4.87358C9.93939 4.15301 11.4782 3.77681 13.04 3.77681L13.04 0.540145Z'
        fill='#2AABBC'
      />
    </svg>
  );
};

export default ProgressIcon;

export const HalfCircularProgress = ({ className, height = 22, width = 22 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 22 22'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      width={width}
      height={height}
      className={clsMerge(className)}
    >
      <path
        d='M22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM3.5 11C3.5 15.1421 6.85786 18.5 11 18.5C15.1421 18.5 18.5 15.1421 18.5 11C18.5 6.85786 15.1421 3.5 11 3.5C6.85786 3.5 3.5 6.85786 3.5 11Z'
        fill='#202020'
      />
      <path
        d='M11 0C12.1532 1.37519e-08 13.2992 0.181341 14.3961 0.537379L13.3155 3.86639C12.5677 3.62364 11.7863 3.5 11 3.5V0Z'
        fill='#D9D9D9'
      />
    </svg>
  );
};
