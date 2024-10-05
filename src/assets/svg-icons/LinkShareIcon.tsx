import React from 'react';

import { clsMerge } from '@/utils/classname-merge';
import { IconProps } from './types';

const LinkShareIcon = ({ className, height = 14, width = 18 }: IconProps) => {
  return (
    <svg
      viewBox='0 0 18 14'
      width={width}
      height={height}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      className={clsMerge(className)}
    >
      <g clipPath='url(#clip0_1_241)'>
        <path
          d='M15.8648 7.30901C17.4016 5.77229 17.4016 3.27854 15.8648 1.74182C14.3281 0.205103 11.8344 0.202368 10.2976 1.74182L9.98866 2.05081L11.2273 3.28948L11.5363 2.98049C12.3894 2.12737 13.7758 2.12737 14.6289 2.98049C15.482 3.83362 15.482 5.21995 14.6289 6.07307L11.5336 9.16565C10.6805 10.0188 9.29413 10.0188 8.441 9.16565C7.741 8.46565 7.61249 7.40745 8.06366 6.57893C8.11288 6.48596 8.1703 6.39573 8.23593 6.31096L6.83593 5.26096C6.71835 5.41682 6.61444 5.57815 6.52421 5.74768C5.71757 7.24065 5.94179 9.14377 7.20507 10.4043C8.74179 11.941 11.2355 11.941 12.7723 10.4043L15.8648 7.30901ZM1.63514 6.69104C0.0984253 8.22776 0.0984253 10.7215 1.63514 12.2582C3.17186 13.7949 5.66561 13.7949 7.20233 12.2582L7.51132 11.9492L6.27264 10.7106L5.96366 11.0196C5.11054 11.8727 3.72421 11.8727 2.87108 11.0196C2.01796 10.1664 2.01796 8.7801 2.87108 7.92698L5.96639 4.8344C6.81952 3.98127 8.20585 3.98127 9.05897 4.8344C9.75897 5.5344 9.88749 6.5926 9.43632 7.42112C9.3871 7.51409 9.32968 7.60432 9.26405 7.68909L10.6641 8.73909C10.7816 8.58323 10.8855 8.4219 10.9758 8.25237C11.7824 6.7594 11.5582 4.85627 10.2949 3.59573C8.75819 2.05901 6.26444 2.05901 4.72772 3.59573L1.63514 6.69104Z'
          fill='#ECECEC'
        />
      </g>
      <defs>
        <clipPath id='clip0_1_241'>
          <rect width='17.5' height='14' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LinkShareIcon;
