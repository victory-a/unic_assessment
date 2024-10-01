import React from 'react';

const SideBar = () => {
  return (
    <aside>
      <div className='hidden md:block md:w-1/4 lg:w-1/5 xl:w-1/4 2xl:w-1/4'>
        <div className='flex h-screen w-[35vw] flex-col justify-between border-r border-r-foreground px-3 py-[14px] xl:w-[19.03367496339678vw]'>
          <div className='flex flex-col'>
            <div className='text-xs font-medium text-[#676767]'>
              <button className='group flex w-full cursor-pointer items-center justify-between rounded-lg py-3 text-sm font-normal text-white hover:bg-[#212121]'>
                <h2 className='truncate px-2 text-[15px] text-grey-100'>Lists</h2>
              </button>
            </div>
          </div>

          <div className='flex flex-col justify-end'></div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;

