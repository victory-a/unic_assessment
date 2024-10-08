import React from 'react';

import { clsMerge } from '@/utils/classname-merge';
import useToast from '@/hooks/useToast';

import { useActionModalsContext } from '@/context/ActionModalsContext';
import GlobeIcon from '@/assets/svg-icons/GlobeIcon';

const WebSearchToggle = () => {
  const [isAdvanced, setIsAdvanced] = React.useState(false);

  const { showToast } = useToast();
  const { insertCommand, webSearchFormValues: formValues, updateFormValues } = useActionModalsContext();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    insertCommand('WEB_SEARCH');
    showToast({ message: 'Command Inserted', variant: 'success' });
  };

  return (
    <div className='rounded-md bg-background p-5'>
      <form onSubmit={handleSubmit}>
        <div className='mb-2 flex gap-1.5'>
          <GlobeIcon />
          <p className='text-xs uppercase'>Web Search</p>
        </div>

        <div className='flex items-center justify-between gap-8'>
          <input
            value={formValues.url}
            onChange={(e) => updateFormValues({ form: 'WEB_SEARCH', values: { url: e.target.value } })}
            type='text'
            placeholder='Insert Search term here...'
            className='w-full bg-background text-[15px] outline-none placeholder:text-[15px] placeholder:text-grey-600'
          />
          <div className='flex gap-2'>
            <button
              type='button'
              className={clsMerge(
                'rounded-lg border bg-background px-2 py-1.5 text-sm font-medium',
                isAdvanced ? 'border-blue-100 text-blue-100' : 'border-foreground text-primary',
              )}
              onClick={() => setIsAdvanced(!isAdvanced)}
            >
              Advanced
            </button>
            <button
              type='submit'
              disabled={!formValues.url}
              className='rounded-lg bg-foreground px-2 py-1.5 text-sm font-medium disabled:cursor-not-allowed'
            >
              Insert
            </button>
          </div>
        </div>

        {isAdvanced ? (
          <div className='mt-2 flex gap-4'>
            <label htmlFor='web_search_max_execution_time' className='text-sm'>
              Max_execution_time:
              <input
                value={formValues.max_execution_time}
                onChange={(e) =>
                  updateFormValues({ form: 'WEB_SEARCH', values: { max_execution_time: Number(e.target.value) } })
                }
                type='number'
                min={0}
                id='web_search_max_execution_time'
                className='ml-2 w-12 rounded-sm bg-foreground pl-2'
              />
            </label>

            <label htmlFor='web_search_filter' className='flex items-center text-sm'>
              Filter
              <input
                id='web_search_filter'
                type='checkbox'
                checked={formValues.filter}
                onChange={(e) => updateFormValues({ form: 'WEB_SEARCH', values: { filter: e.target.checked } })}
                className='ml-1'
              />
            </label>

            <label htmlFor='web_search_store' className='flex items-center text-sm'>
              Store
              <input
                id='web_search_store'
                type='checkbox'
                checked={formValues.store}
                onChange={(e) => updateFormValues({ form: 'WEB_SEARCH', values: { store: e.target.checked } })}
                className='ml-1'
              />
            </label>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default WebSearchToggle;
