import React from 'react';
import { useSnackbar, OptionsObject } from 'notistack';

interface ToastOptions {
  message: string;
  variant?: 'default' | 'error' | 'success' | 'warning' | 'info';
  duration?: number;
  position?: {
    vertical: 'top' | 'bottom';
    horizontal: 'left' | 'center' | 'right';
  };
}

const useToast = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showToast = ({
    message,
    variant = 'default',
    duration = 3000,
    position = { vertical: 'top', horizontal: 'right' },
  }: ToastOptions) => {
    const options: OptionsObject = {
      variant,
      autoHideDuration: duration,
      anchorOrigin: {
        vertical: position.vertical,
        horizontal: position.horizontal,
      },
    };

    return enqueueSnackbar(message, options);
  };

  return { showToast, closeSnackbar };
};

export default useToast;
