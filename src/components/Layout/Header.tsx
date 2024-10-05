import React from 'react';
import Link from 'next/link';

import TabHeader from './TabHeader';

import CaretDown from '@/assets/svg-icons/CaretDown';
import CopyIcon from '@/assets/svg-icons/CopyIcon';
import DownloadIcon from '@/assets/svg-icons/DownloadIcon';
import ShareIcon from '@/assets/svg-icons/ShareIcon';
import WriteIcon from '@/assets/svg-icons/WriteIcon';
import HamBurgerIcon from '@/assets/svg-icons/HamBurgerIcon';

const tabs = [
  { label: 'Stream', value: 0 },
  { label: 'Parallel', value: 1 },
  { label: 'Sequential', value: 2 },
];

interface IIconButton {
  icon: React.ReactNode;
  onClick?: () => void;
}
const IconButton = ({ icon, onClick = () => {} }: IIconButton) => {
  return (
    <button onClick={onClick} className='h-9 rounded-md bg-foreground px-3 hover:bg-grey-400'>
      {icon}
    </button>
  );
};

const ProfileBadge = ({ initials }: { initials: string }) => {
  return (
    <button className='flex items-center justify-center'>
      <div className='mr-2 flex h-[2.215rem] w-[2.215rem] items-center justify-center rounded-full bg-blue-100'>
        <p className='text-background'>{initials}</p>
      </div>
      <span>
        <CaretDown />
      </span>
    </button>
  );
};

const ListItem = ({ label, link }: { label: string; link: string }) => {
  return (
    <li>
      <Link href={link} className='rounded-[0.462rem] p-3 text-sm font-medium hover:bg-grey-400'>
        {label}
      </Link>
    </li>
  );
};

const Header = ({ onOpen }: { onOpen: () => void }) => {
  const [activeTab, setActiveTab] = React.useState(2);

  return (
    <>
      <div className='hidden w-full md:block'>
        <header className='sticky h-[3.625rem] w-full border-b border-b-foreground lg:h-[7.5rem]'>
          <div className='flex h-[3.625rem] w-full items-center justify-between px-5'>
            <div>
              <button onClick={onOpen} className='lg:hidden'>
                <HamBurgerIcon />
              </button>
            </div>
            <ul className='flex w-full max-w-[21.25rem] items-center justify-between'>
              <ListItem label='Dashboard' link='#!' />
              <ListItem label='My Apps' link='#!' />
              <ListItem label='App Store' link='#!' />
            </ul>
            <div>
              <ProfileBadge initials='AP' />
            </div>
          </div>

          <div className='hidden items-center justify-between border-t border-t-foreground px-5 py-2.5 lg:flex'>
            <div className='flex items-center'>
              <h1 className='mr-3'>Front-End Task</h1>
              <button>
                <WriteIcon />
              </button>
            </div>
            <TabHeader tabs={tabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='flex items-center justify-center gap-2.5'>
              <button className='mr-1.5 flex h-9 items-center gap-3 rounded-md bg-foreground px-3 hover:bg-grey-400'>
                ChatGPT
                <span>
                  <CaretDown />
                </span>
              </button>
              <IconButton icon={<CopyIcon />} />
              <IconButton icon={<DownloadIcon />} />
              <IconButton icon={<ShareIcon />} />
            </div>
          </div>
        </header>
      </div>

      <div className='flex items-center justify-between p-3 md:hidden'>
        <button onClick={onOpen}>
          <HamBurgerIcon />
        </button>
        <ProfileBadge initials='AP' />
      </div>
    </>
  );
};

export default Header;
