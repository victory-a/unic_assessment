import React from 'react';
import ActionBar from './ActionBar';

const PersonaDisplay = () => {
  return (
    <>
      <div className='mb-[1.875rem] inline-flex flex-col rounded-xl bg-green-100 px-4 py-3'>
        <h2 className='mb-1 text-[0.8125rem] font-semibold uppercase leading-tight text-secondary'>DEFAULT Persona</h2>
        <p className='tfont-semibold'>World-Class React/Front-End Developer</p>
      </div>

      <div className='mb-4 flex items-center'>
        <h3 className='text-sm font-bold text-secondary'>World-Class React/Front-End Developer</h3>
        <span className='mx-3 rounded-full border-[3px] border-secondary'></span>
        <p className='inline-block text-xs font-medium leading-none text-secondary'> ChatGPT 4o</p>
      </div>

      <p className='font-medium'>How can I help you today to ensure your prompts yield the best possible results?</p>

      <ActionBar />
    </>
  );
};

export default PersonaDisplay;
