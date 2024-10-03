import React from 'react';
import ActionBar from './ActionBar';

const ChatQuestion = () => {
  return (
    <div className='my-3 ml-auto w-[92%] md:my-8 md:w-[85%]'>
      <div className='rounded-xl bg-foreground p-3 md:p-7'>
        <p className='font-medium'>
          Create a responsive login form component in React using functional components and hooks. The form should
          include fields for a username and password, with validation rules: the username must be an email address, and
          the password should be at least 8 characters long. Include state management for form inputs, error messages
          for validation, and a submit button that triggers a mock API call to authenticate the user. Style the form
          using CSS-in-JS with styled-components or a similar library, ensuring it looks good on both desktop and mobile
          screens.
        </p>
      </div>
      <div className='flex justify-end'>
        <ActionBar />
      </div>
    </div>
  );
};

export default ChatQuestion;
