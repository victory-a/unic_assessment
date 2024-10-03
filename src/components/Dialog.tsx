import React from 'react';
import { Dialog as ReachDialog } from '@reach/dialog';
import '@reach/dialog/styles.css';

interface IDialog {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Dialog = ({ isOpen, onClose, children }: IDialog) => {
  return (
    <ReachDialog isOpen={isOpen} onDismiss={onClose} aria-labelledby='modal-title' className='custom-modal'>
      <div className='flex justify-center'>{children}</div>
    </ReachDialog>
  );
};

export default Dialog;
