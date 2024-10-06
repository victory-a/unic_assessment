'use client'
import React, { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { clsMerge } from '@/utils/classname-merge';

import SideBar from './SideBar';
import Header from './Header';
import useWindowSize from '@/hooks/useWindowSize';
import MobileSidebar from './MobileSidebar';
import Head from 'next/head';

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '300', '400', '600', '700', '900'],
});

const AppLayout = (props: PropsWithChildren) => {
  const [displayMobileSidebar, setDisplayMobileSidebar] = React.useState(false);
  const { width } = useWindowSize();

  React.useEffect(() => {
    if (width && width > 768) {
      setDisplayMobileSidebar(false); // automatically close mobile nav on large displays
    }
  }, [width]);

  return (
    <>
      <Head>
        <title>UNIC Assessment</title>
        <meta name='description' content='UNIC Frontend Assessment Victory Asokomeh' />
      </Head>
      <div
        className={clsMerge(
          inter.className,
          'no-scrollbar flex h-[100dvh] w-[100dhv] flex-col overflow-y-auto md:flex-row md:overflow-x-hidden md:overflow-y-hidden',
        )}
      >
        {width && width > 1024 ? <SideBar /> : null}
        {displayMobileSidebar ? <MobileSidebar onClose={() => setDisplayMobileSidebar(false)} /> : null}

        <div className='w-full px-4'>
          <Header onOpen={() => setDisplayMobileSidebar(true)} />
          <div className='no-scrollbar chat-body-h relative mx-auto flex w-full max-w-full flex-col overflow-x-scroll lg:max-w-[60rem]'>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
