import React from 'react';
import ReactMarkdown from 'react-markdown';
import rehypePrism from 'rehype-prism-plus';
import 'prism-themes/themes/prism-one-dark.css';

import ActionBar from './ActionBar';
const ChatResponse = ({ response }: { response: string }) => {
  return (
    <div className='mr-auto w-[92%] md:my-8 md:w-[85%]'>
      <ReactMarkdown
        children={response}
        rehypePlugins={[rehypePrism]}
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '');

            return inline ? (
              <code className={`rounded bg-[#282C34] px-2 py-1 font-medium ${className || ''}`} {...props}>
                {children}
              </code>
            ) : (
              <pre className={`${className || ''} !py-0 font-medium`} {...props}>
                <code className={`language-${match?.[1] || ''}`}>{children}</code>
              </pre>
            );
          },
        }}
      />
      <ActionBar />
    </div>
  );
};

export default ChatResponse;
