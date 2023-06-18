import React, { useEffect, useState } from 'react';
import { Prompt, SidebarPropsList } from '@/types/props';
import useColorMode from '../../hooks/useColorMode';

import { FiPlus, FiSearch, FiTrash, FiSun, FiMoon, FiUserPlus, FiLogOut } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

interface SidebarProps extends SidebarPropsList {
  isSidebarOpen: boolean;
  isSidebarVisible: boolean;
  history: any;
  fetchResourcesFromHistory?: (itemId: number) => void;
}

export default function Sidebar({ history, isSidebarOpen, isSidebarVisible, fetchResourcesFromHistory }: SidebarProps) {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [isMounted, setIsMounted] = useState(false);
  const [selectedButton, setSelectedButton] = useState('');
  const [colorMode, setColorMode] = useColorMode();
  let sidebarSearchBtn;
  let signOutBtn;
  let clearSearchesBtn;

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  const toasterFollow = () => {
    toast.promise(
      register(),
      {
        loading: 'Creating user... ⏳',
        success: <b>You now follow {username}! 🥳</b>,
        error: <b>Could not follow {username} 🤔</b>,
      }
    );
  }

  const register = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch(`${API_BASE_URL}/users/follow/username/${username}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ username })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
    } catch (error) {
      console.error('An error occurred while trying to follow:', error);
      throw error;
    }
  };

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
      <div className="text-darkerGrey dark:text-darkGrey w-full px-4 py-1.5 rounded-lg border-2 border-darkerGrey dark:border-darkGrey transition-colors flex flex-row gap-4 items-center justify-start">

        <input className="w-full text-black dark:text-darkGrey bg-transparent outline-none overflow-y-hidden max-h-24 my-1.5" placeholder='Follow by username' value={username} onChange={(e) => setUsername(e.target.value)} />
        <button className="text-darkerGrey dark:text-darkGrey p-2 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey transition-colors" onClick={toasterFollow}>
          <FiUserPlus size={18} className='shrink-0 grow-0' />
        </button>
      </div>
    )
  }

  if (router.pathname === '/profile') {
    signOutBtn = (
      <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey transition-colors flex flex-row gap-4 items-center justify-start">
        <FiLogOut size={18} className='shrink-0 grow-0' />
        <span className="truncate">Sign out</span>
      </button>
    )
  }

  if (router.pathname === '/search' || router.pathname === '/feed') {
    clearSearchesBtn = (
      <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
        <FiTrash className='shrink-0 grow-0' />
        <span className="truncate">Clear searches</span>
      </button>
    )
  }

  return (
    <>
      <Toaster />
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
                  {history.map((prompt: Prompt, index: any) => {

                    return (
                      <button
                        className={`relative text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start ${
                          selectedButton ? 'bg-lightGrey dark:bg-darkerGrey' : ''
                        }`}
                        key={index}
                        onClick={() => {
                          fetchResourcesFromHistory && fetchResourcesFromHistory(prompt.id);
                          setSelectedButton(index);
                        }}
                      >
                        <FiSearch className="shrink-0 grow-0" />
                        <span className="truncate">{prompt.title}</span>
                        <div className={`absolute right-2 z-10 ${selectedButton ? 'visible' : 'invisible'}`}>
                          <FiTrash
                            size={18}
                            className="shrink-0 grow-0 text-darkerGrey dark:text-darkGrey hover:text-black dark:hover:text-white transition-colors cursor-pointer"
                          />
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}

            </div>
            <div className="bg-white dark:bg-dark py-4 border-t border-solid border-darkGrey absolute z-1 bottom-0 left-0 right-0 mx-4">

              <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start">
                {toggleIcon}
                <span className="truncate">{toggleText}</span>
              </button>

              {clearSearchesBtn}
              
              {signOutBtn}

              <button onClick={() => router.push('/profile')} className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-lightGrey dark:hover:bg-darkerGrey flex flex-row gap-4 items-center justify-start md:hidden">
                <AiOutlineUser className='shrink-0 grow-0' />
                <span className="truncate">My Account</span>
              </button>

            </div>
          </div>
        )}
      </div>
    </>
  );
}