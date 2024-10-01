import { clsMerge } from '@/utils/classname-merge';
import React, { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import SideBar from './SideBar';

const inter = Inter({ subsets: ['latin'] });

const AppLayout = (props: PropsWithChildren) => {
  return (
    <div
      className={clsMerge(
        inter.className,
        'red-border flex h-[100dvh] w-[100dhv] flex-col overflow-y-auto md:flex-row md:overflow-x-hidden md:overflow-y-hidden',
      )}
    >
      <SideBar />
      {props.children}
    </div>
  );
};

export default AppLayout;
