import React from 'react';
import useColorMode from '../../hooks/useColorMode';
import { CgProfile } from 'react-icons/cg';
import  { BiLockOpenAlt } from 'react-icons/bi';
import { IoIosNotifications } from 'react-icons/io';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function profileSidebar() {
  const [colorMode, setColorMode] = useColorMode();

  const toggleIcon = colorMode === 'light' ? <FiMoon className='shrink-0 grow-0' /> : <FiSun className='shrink-0 grow-0' />;
  const toggleText = colorMode === 'light' ? 'Dark Mode' : 'Light Mode';

  return (


    <div className="w-272 shrink-0 flex bg-lightGrey dark:bg-dark">
      <div className="px-4 flex flex-col gap-2 justify-between narrow-sidebar w-full lg:flex-shrink-0 lg:overflow-y-auto">
        <div className="py-4 flex flex-col gap-2">

          <div className='flex flex-col'>
            <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
            <CgProfile className='shrink-0 grow-0' />
            <span className="truncate">My Profile</span>
            </button>

            <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
            <BiLockOpenAlt className='shrink-0 grow-0' />
            <span className="truncate">Sign in & Security</span>
            </button>

            <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
            <IoIosNotifications className='shrink-0 grow-0' />
            <span className="truncate">Notifications</span>
            </button>
          </div>
        
        </div>

        <div className="py-4 border-t border-solid border-darkGrey">

          <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
            {toggleIcon}
            <span className="truncate">{toggleText}</span>
          </button>
          
        </div>





      </div>
    </div>


  );
}