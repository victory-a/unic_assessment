import React from 'react';
import { clsMerge } from '@/utils/classname-merge';

interface ITab {
  label: string;
  value: number;
}

interface ITabHeader {
  tabs: ITab[];
  activeTab: number;
  setActiveTab: React.Dispatch<React.SetStateAction<number>>;
}

const TabHeader = ({ tabs, activeTab = 3, setActiveTab }: ITabHeader) => {
  return (
    <div className='h-[2.625rem] rounded-md bg-foreground'>
      {tabs.map((tab, i) => {
        const isActive = tab.value === activeTab;
        const isFirstItem = i === 0;
        const isLastItem = i === tabs.length - 1;

        return (
          <button
            onClick={() => setActiveTab(tab.value)}
            className={clsMerge(
              'h-full px-4 text-sm font-semibold',
              isActive && 'bg-primary text-background',
              isActive && isFirstItem && 'rounded-s-md',
              isActive && isLastItem && 'rounded-e-md',
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
};

export default TabHeader;
