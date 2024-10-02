import React from 'react';

interface IActionButton {
  handleClick?: () => void;
  icon?: React.ReactNode;
  label: string;
  disabled?: boolean;
}

const ActionButton = ({ handleClick = () => {}, icon, label, disabled = false }: IActionButton) => {
  return (
    <button
      onClick={handleClick}
      className='flex items-center gap-2 rounded-lg p-2 hover:bg-grey-400 disabled:bg-transparent'
      type='button'
      disabled={disabled}
    >
      {icon ? <span>{icon}</span> : null}
      {label}
    </button>
  );
};

export default ActionButton;
