import React, { useEffect, useState } from 'react';
import { SidebarPropsList } from '@/types/props';
import useColorMode from '../../hooks/useColorMode';

import { FiPlus, FiSearch, FiTrash, FiSun, FiMoon } from 'react-icons/fi';
import { BiUser } from 'react-icons/bi';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';


interface SidebarProps extends SidebarPropsList {
  isSidebarOpen: boolean;
  isSidebarVisible: boolean;
  history: any;
  fetchResourcesFromHistory?: (itemId: string) => void;
}

export default function Sidebar({ history, isSidebarOpen, isSidebarVisible, fetchResourcesFromHistory }: SidebarProps) {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const [colorMode, setColorMode] = useColorMode();
  let sidebarSearchBtn;

  useEffect(() => {
    setIsMounted(true);
  }, [])

  if (!isMounted) {
    return null;
  }

  const toggleIcon = colorMode === 'light' ? <FiMoon className='shrink-0 grow-0' /> : <FiSun className='shrink-0 grow-0' />;
  const toggleText = colorMode === 'light' ? 'Dark Mode' : 'Light Mode';

  if (router.pathname === '/search') {
    
    sidebarSearchBtn = (
      <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey border-2 border-darkerGrey dark:border-darkGrey transition-colors flex flex-row gap-4 items-center justify-start">
        <FiPlus size={18} className='shrink-0 grow-0' />
        <span className="truncate">New search</span>
      </button>
    )

  } else if (router.pathname === '/feed') {
    
    sidebarSearchBtn = (
      <div className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg border-2 border-darkerGrey dark:border-darkGrey transition-colors flex flex-row gap-4 items-center justify-start">
        <BiUser size={18} className='shrink-0 grow-0' />
        <input className="w-full text-black dark:text-darkGrey bg-transparent outline-none overflow-y-hidden max-h-24" placeholder='Search for user'
          onChange={() => {
            //function here to search for user in feed
          }} />
      </div>
    )

  }
  

  return (
    
    <div className={`w-full shrink-0 grow-0 ${isSidebarOpen ? 'flex' : 'hidden'} ${isSidebarVisible ? 'md:w-[272px] md:flex' : 'md:w-0 md:flex'} relative z-9 md:static md:z-0 bg-white dark:bg-dark`} style={{ opacity: isSidebarVisible ? 1 : 0, transition: 'opacity 0.4s ease-in-out, width 0.4s ease-in-out' }}>
      {isSidebarVisible && (
        <div className="px-4 flex relative flex-col gap-2 justify-between narrow-sidebar w-full h-full lg:flex-shrink-0 lg:overflow-y-auto">
          <div className="py-4 flex flex-col gap-2 h-full">

            {sidebarSearchBtn}

            {history.length === 0 ? (
              <div className='flex items-center justify-center h-full pb-[161px] md:pb-[113px]'>
                <p className='w-full text-center text-darkerGrey dark:text-darkGrey'>😥 Search history is empty.</p>
              </div>
            ) : (
              <div className='flex flex-col flex-1 overflow-y-auto relative pb-[105px] md:pb-[57px] custom-scrollbar'>
                {history.map((item: any, index: any) => {
                  return (
                    <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start" key={index} onClick={() => fetchResourcesFromHistory && fetchResourcesFromHistory(item.id)}>
                      <FiSearch className='shrink-0 grow-0' />
                      <span className="truncate">{item.title}</span>
                    </button>
                  );
                })}
              </div>
            )}

          </div>
          <div className="bg-white dark:bg-dark py-4 border-t border-solid border-darkGrey absolute z-1 bottom-0 left-0 right-0 mx-4">

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