import React from 'react';
import LinkShareIcon from '@/assets/svg-icons/LinkShareIcon';

const URLScrapeToggle = () => {
  return (
    <div className='rounded-md bg-background p-5'>
      <div className='mb-2 flex gap-1.5'>
        <LinkShareIcon />
        <p className='text-xs uppercase'>Include url</p>
      </div>

      <div className='flex items-center justify-between gap-8'>
        <input
          type='text'
          placeholder='Enter URL here...'
          className='placeholder:text-grey-600 w-full bg-background text-[15px] outline-none placeholder:text-[15px]'
        />
        <div className='flex gap-2'>
          <button className='rounded-lg border border-foreground bg-background px-2 py-1.5 text-sm font-medium'>
            Advanced
          </button>
          <button className='rounded-lg bg-foreground px-2 py-1.5 text-sm font-medium'>Insert</button>
        </div>
      </div>
    </div>
  );
};

export default URLScrapeToggle;
