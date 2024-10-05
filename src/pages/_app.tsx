import ActionModalsContext from '@/context/ActionModalsContext';
import '@/styles/globals.css';
import { SnackbarProvider } from 'notistack';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <ActionModalsContext>
        <Component {...pageProps} />
      </ActionModalsContext>
    </SnackbarProvider>
  );
}
