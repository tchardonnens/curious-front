import { SidebarPropsList } from '@/types/props';
import React from 'react';
import useColorMode from '../../hooks/useColorMode';

import { FiPlus, FiSearch, FiTrash, FiSun, FiMoon } from 'react-icons/fi';

export default function Sidebar(props: SidebarPropsList) {
  const [colorMode, setColorMode] = useColorMode();

  const toggleIcon = colorMode === 'light' ? <FiMoon className='shrink-0 grow-0' /> : <FiSun className='shrink-0 grow-0' />;
  const toggleText = colorMode === 'light' ? 'Dark Mode' : 'Light Mode';

  return (

    <div className="w-272 shrink-0 flex bg-lightGrey dark:bg-dark">
      <div className="px-4 flex flex-col gap-2 justify-between narrow-sidebar w-full lg:flex-shrink-0 lg:overflow-y-auto">
        <div className="py-4 flex flex-col gap-2">

          <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey border-2 border-darkerGrey dark:border-darkGrey transition-colors flex flex-row gap-4 items-center justify-start">
            <FiPlus className='shrink-0 grow-0' />
            <span className="truncate">New search</span>
          </button>

          <div className='flex flex-col'>

            <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
              <FiSearch className='shrink-0 grow-0' />
              <span className="truncate">Rocket Launcher Tutorials</span>
            </button>

          </div>
        
        </div>

        <div className="py-4 border-t border-solid border-darkGrey">

          <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
            <FiTrash className='shrink-0 grow-0' />
            <span className="truncate">Clear searches</span>
          </button>

          <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
            {toggleIcon}
            <span className="truncate">{toggleText}</span>
          </button>
          
        </div>


        {/* {props.history.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
                <h1 className="text-2xl font-bold text-white">{item.header}</h1>
                <p className="text-white">{item.description}</p>
              </div>
            );
          })} */}


      </div>
    </div>

  );
}