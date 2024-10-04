import React from 'react';

import { clsMerge } from '@/utils/classname-merge';
import GlobeIcon from '@/assets/svg-icons/GlobeIcon';

interface IWebSearchValues {
  max_execution_time: number;
  filter: boolean;
  store: boolean;
}

const WebSearchToggle = () => {
  const [isAdvanced, setIsAdvanced] = React.useState(false);

  const [values, setValues] = React.useState<IWebSearchValues>({
    max_execution_time: 10,
    filter: false,
    store: false,
  });

  const handleValuesUpdate = <K extends keyof IWebSearchValues>(name: K, val: IWebSearchValues[K]) => {
    setValues((prev) => ({
      ...prev,
      [name]: val,
    }));
  };

  return (
    <div className='rounded-md bg-background p-5'>
      <div className='mb-2 flex gap-1.5'>
        <GlobeIcon />
        <p className='text-xs uppercase'>Web Search</p>
      </div>

      <div className='flex items-center justify-between gap-8'>
        <input
          type='text'
          placeholder='Insert Search term here...'
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

export default WebSearchToggle;
