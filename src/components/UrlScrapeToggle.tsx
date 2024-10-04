import React from 'react';

import LinkShareIcon from '@/assets/svg-icons/LinkShareIcon';
import { clsMerge } from '@/utils/classname-merge';

interface IScrapeValues {
  max_execution_time: number;
  filter: boolean;
  store: boolean;
}

const URLScrapeToggle = () => {
  const [isAdvanced, setIsAdvanced] = React.useState(false);

  const [values, setValues] = React.useState<IScrapeValues>({
    max_execution_time: 10,
    filter: false,
    store: false,
  });

  const handleValuesUpdate = <K extends keyof IScrapeValues>(name: K, val: IScrapeValues[K]) => {
    setValues((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  return (
    <div className='rounded-md bg-background p-5'>
      <div className='mb-2 flex gap-1.5'>
        <LinkShareIcon />
        <p className='text-xs uppercase'>Include url</p>
      </div>

      <div className='flex items-center justify-between gap-8'>
        <input
          autoFocus
          type='text'
          placeholder='Enter URL here...'
          className='w-full bg-background text-[15px] outline-none placeholder:text-[15px] placeholder:text-grey-600'
        />
        <div className='flex gap-2'>
          <button
            className={clsMerge(
              'rounded-lg border bg-background px-2 py-1.5 text-sm font-medium',
              isAdvanced ? 'border-blue-100 text-blue-100' : 'border-foreground text-primary',
            )}
            onClick={() => setIsAdvanced(!isAdvanced)}
          >
            Advanced
          </button>
          <button className='rounded-lg bg-foreground px-2 py-1.5 text-sm font-medium'>Insert</button>
        </div>
      </div>

      {isAdvanced ? (
        <div className='mt-2 flex gap-4'>
          <label htmlFor='max_execution_time' className='text-sm'>
            Max_execution_time:
            <input
              onChange={(e) => handleValuesUpdate('max_execution_time', Number(e.target.value))}
              type='number'
              min={0}
              id='max_execution_time'
              className='ml-2 w-12 rounded-sm bg-foreground pl-2'
            />
          </label>

          <label htmlFor='filter' className='flex items-center text-sm'>
            Filter
            <input
              id='filter'
              type='checkbox'
              checked={values.filter}
              onChange={(e) => handleValuesUpdate('filter', e.target.checked)}
              className='ml-1'
            />
          </label>

          <label htmlFor='store' className='flex items-center text-sm'>
            Store
            <input
              id='store'
              type='checkbox'
              checked={values.store}
              onChange={(e) => handleValuesUpdate('store', e.target.checked)}
              className='ml-1'
            />
          </label>
        </div>
      ) : null}
    </div>
  );
};

export default URLScrapeToggle;
