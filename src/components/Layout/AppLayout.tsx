import React, { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { clsMerge } from '@/utils/classname-merge';

import SideBar from './SideBar';
import Header from './Header';
import useWindowSize from '@/hooks/useWindowSize';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '700', '900'],
});

const AppLayout = (props: PropsWithChildren) => {
  const { width } = useWindowSize();

  return (
    <div
      className={clsMerge(
        inter.className,
        'red-border flex h-[100dvh] w-[100dhv] flex-col overflow-y-auto md:flex-row md:overflow-x-hidden md:overflow-y-hidden',
      )}
    >
      {width && width > 1024 ? <SideBar /> : null}
      <Header />
      {props.children}
    </div>
  );
};

export default AppLayout;
