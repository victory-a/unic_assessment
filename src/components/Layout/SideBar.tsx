import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '@/assets/logo.png';
import AppFileIcon from '@/assets/svg-icons/AppFileIcon';
import RecentIcon from '@/assets/svg-icons/RecentIcon';
import CaretDown from '@/assets/svg-icons/CaretDown';
import LibraryIcon from '@/assets/svg-icons/LibraryIcon';
import PlusIcon from '@/assets/svg-icons/PlusIcon';
import UploadIcon from '@/assets/svg-icons/UploadIcon';
import TrashIcon from '@/assets/svg-icons/TrashIcon';
import ProgressIcon from '@/assets/svg-icons/ProgressIcon';

const navGroups = [
  {
    name: 'Library',
    icon: <LibraryIcon />,
    links: [
      { name: 'Lists', href: '/' },
      { name: 'Personas', href: '/' },
      { name: 'Agents', href: '/' },
      { name: 'Projects', href: '/' },
      { name: 'Prompts', href: '/' },
    ],
  },
  { name: 'App Files', icon: <AppFileIcon />, href: '/', links: [] },
];

interface INavGroup {
  name: string;
  icon: ReactNode;
  links?: Array<{
    name: string;
    href: string;
  }>;
}

function NavButton({ label, href }: { label: string; href: string }) {
  return (
    <div className='ml-5 block cursor-pointer items-center justify-between rounded-lg text-sm font-normal text-white hover:bg-grey-400'>
      <Link href={href} className='flex px-2 py-3 text-[15px] text-grey-100'>
        {label}
      </Link>
    </div>
  );
}

function NavGroup({ links = [], name, icon }: INavGroup) {
  const hasChildren = links.length > 0;
  return (
    <>
      <div className='my-3 ml-2 flex items-center space-x-3'>
        {icon}
        <button className='w-full text-left text-primary'>{name}</button>
        {hasChildren ? <CaretDown /> : null}
      </div>
      {links.map((link, i) => (
        <NavButton label={link.name} href={link.href} key={`${i}-${link.name}`} />
      ))}
    </>
  );
}

const SideBar = () => {
  function clearHistory() {
    localStorage.removeItem('chatMessages');
    window.location.reload();
  }

  return (
    <aside className='bg-background'>
      <div>
        <div className='flex h-screen w-[17rem] flex-col border-r border-r-foreground px-5 py-[14px]'>
          <div>
            <Link href='/' className='mb-3 block'>
              <Image priority src={logo} alt='UNIC logo' />
            </Link>

            <button
              onClick={clearHistory}
              className='mb-3 flex w-full items-center gap-x-[0.625rem] rounded-[6.25rem] bg-blue-100 p-4 text-left text-sm font-semibold text-grey-200'
            >
              <PlusIcon />
              New Chat
            </button>
          </div>
          <div className='no-scrollbar flex flex-col overflow-y-auto pb-10'>
            <div className='my-3 ml-2 flex items-center gap-3'>
              <RecentIcon />
              <button className='w-full text-left text-primary'>Recents</button>
            </div>
            {navGroups.map((navGroup, i) => (
              <NavGroup
                links={navGroup.links}
                key={`${i}-${navGroup.name}`}
                name={navGroup.name}
                icon={navGroup.icon}
              />
            ))}
          </div>

          <div className='mt-auto flex flex-col'>
            <div className='mb-6 hidden rounded-[0.462rem] bg-foreground sm:block'>
              <div className='flex items-center justify-between p-4'>
                <div>
                  <p className='mb-3 text-sm font-medium'>125,000 tokens left</p>
                  <p className='text-xs font-medium text-grey-300'>~145,000 words</p>
                </div>
                <ProgressIcon />
              </div>
              <div className='rounded-[0.462rem] rounded-t-none bg-grey-400 p-4'>
                <p className='text-xs font-medium text-grey-500'>See My Plan</p>
              </div>
            </div>

            <NavGroup name='Shared' icon={<UploadIcon />} />
            <NavGroup name='Recently Deleted' icon={<TrashIcon />} />
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
