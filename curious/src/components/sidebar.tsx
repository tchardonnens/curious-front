import React, { useEffect, useState } from 'react';
import { SidebarPropsList } from '@/types/props';
import useColorMode from '../../hooks/useColorMode';

import { FiPlus, FiSearch, FiTrash, FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';


interface SidebarProps extends SidebarPropsList {
  isSidebarOpen: boolean;
  isSidebarVisible: boolean;
  history: any
}

export default function Sidebar({ history, isSidebarOpen, isSidebarVisible }: SidebarProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  const toggleIcon = colorMode === 'light' ? <FiMoon className='shrink-0 grow-0' /> : <FiSun className='shrink-0 grow-0' />;
  const toggleText = colorMode === 'light' ? 'Dark Mode' : 'Light Mode';
  return (
    <div className={`w-full shrink-0 ${isSidebarOpen ? 'flex' : 'hidden'} ${isSidebarVisible ? 'md:w-[272px] md:flex' : 'md:w-0 md:flex'} relative z-9 md:static md:z-0 bg-white dark:bg-dark`} style={{ opacity: isSidebarVisible ? 1 : 0, transition: 'opacity 0.4s ease-in-out, width 0.4s ease-in-out' }}>
      {isSidebarVisible && (
        <div className="px-4 flex flex-col gap-2 justify-between narrow-sidebar w-full h-full lg:flex-shrink-0 lg:overflow-y-auto">
          <div className="py-4 flex flex-col gap-2">

            <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey border-2 border-darkerGrey dark:border-darkGrey transition-colors flex flex-row gap-4 items-center justify-start">
              <FiPlus className='shrink-0 grow-0' />
              <span className="truncate">New search</span>
            </button>

            {history.map((item: any, index: any) => {
              return (
                <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start" key={index}>
                  <FiSearch className='shrink-0 grow-0' />
                  <span className="truncate">{item.title}</span>
                </button>
              );
            })}
          </div>
          <div className="py-4 border-t border-solid border-darkGrey">

            <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
              <FiTrash className='shrink-0 grow-0' />
              <span className="truncate">Clear searches</span>
            </button>

            <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
              {toggleIcon}
              <span className="truncate">{toggleText}</span>
            </button>

            <button onClick={() => router.push('/profile')} className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start md:hidden">
              <AiOutlineUser className='shrink-0 grow-0' />
              <span className="truncate">My Account</span>
            </button>

          </div>
        </div>
      )}
    </div>

  );
}