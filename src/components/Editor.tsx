import React from 'react';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

interface IEditor {
  content: string;
  isLoading: boolean;
  setContent: React.Dispatch<React.SetStateAction<string>>;
}

const Editor = ({ content, setContent }: IEditor) => {
  return (
    <div className='w-full'>
      <ReactQuill value={content} onChange={setContent} />
    </div>
  );
};

export default Editor;
