import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useRef } from 'react';

import { HiBars3 } from 'react-icons/hi2';

import { Dispatch, SetStateAction } from 'react';

interface HeaderProps {
  setIsSidebarOpen?: Dispatch<SetStateAction<boolean>>;
}

export default function Header({ setIsSidebarOpen }: HeaderProps) {
  const router = useRouter();
  let headerContent;
  let sidebarBtn;
  const indicatorRef = useRef<HTMLDivElement | null>(null);
  const searchRef = useRef<HTMLAnchorElement | null>(null);
  const feedRef = useRef<HTMLAnchorElement | null>(null);  

  useEffect(() => {
    const path = router.pathname;
    if (indicatorRef.current && feedRef.current && searchRef.current) {
      if (path === '/feed') {
        indicatorRef.current.style.left = '0';
        indicatorRef.current.style.transform = 'translateX(131.3333%)';
        indicatorRef.current.classList.add('hidden', 'sm:block');
        feedRef.current.classList.add('hidden', 'sm:block');
      } else if (path === '/search') {
        indicatorRef.current.style.right = '0';
        indicatorRef.current.style.transform = 'translateX(-131.3333%)';
        indicatorRef.current.classList.add('hidden', 'sm:block');
        searchRef.current.classList.add('hidden', 'sm:block');
      }
    }
  }, [router.pathname]);
  

  if (router.pathname === '/feed' || router.pathname === '/search') {
    headerContent = (
      <>
        <div className='bg-lightGrey dark:bg-darkerGrey rounded-full p-2 flex flex-row items-center gap-5 relative'>
          <Link href="/search" className='text-center w-16 relative z-10' title='Search' ref={searchRef}>
            Search
          </Link>
          <Link href="/feed" className={`text-center w-16 relative z-10`} title='Feed' ref={feedRef}>
            Feed
          </Link>
          <div className="indicator absolute z-0 bottom-1/6 top-1/6 h-5/6 w-5/12 bg-white dark:bg-dark rounded-full transform transition-all duration-300 ease-in-out" ref={indicatorRef}></div>
        </div>
        <Link href="/profile" className='h-10 w-10 border-2 border-black dark:border-darkGrey rounded-full overflow-hidden cursor-pointer hidden md:block' title='Profile'>
          <img className='w-full height-full' src="https://pyxis.nymag.com/v1/imgs/d6a/dc7/4a5001b7beea096457f480c8808572428b-09-roll-safe.rsquare.w700.jpg" alt="User" />
        </Link>
      </>
    );
<<<<<<< HEAD
  } else if (router.pathname === '/') {
=======
  } else if (router.pathname === '/signup' || router.pathname === '/signin' || router.pathname === '/profile') {
    headerContent = null;
  } else {
>>>>>>> 0ac6813 (Main started)
    headerContent = (
      <div className='flex flex-row gap-4'>
        <Link href="/signup" title='Sign Up'>
          <button className="bg-white text-black border-solid border-2 border-black rounded-md py-1 px-4">Sign Up</button>
        </Link>
        <Link href="/signin" title='Sign In'>
          <button className="bg-black text-white border-solid border-2 border-black rounded-md py-1 px-4">Sign In</button>
        </Link>
      </div>
    );
  } else {
    headerContent = (null);
  }
  if (router.pathname === '/feed' || router.pathname === '/search' || router.pathname === '/profile') {
    sidebarBtn = (
      <button onClick={() => setIsSidebarOpen?.(prev => !prev)} className='flex md:hidden hover:bg-lightGrey hover:dark:bg-darkerGrey rounded-md p-1'>
        <HiBars3 className='shrink-0 grow-0' size={30} />
      </button>
    );
  }

  return (
    <header className={`bg-white ${['/search', '/feed', '/profile'].includes(router.pathname) ? 'dark:bg-dark dark:text-white dark:border-dark' : ''} text-black flex justify-between items-center w-full p-5 border-b-2 border-lightGrey pb-7 px-4`}>
      <div className='flex flex-row items-center'>
        {sidebarBtn}
        <Link href="/" title='Homepage'>
          <h1 className="sm:text-2xl md:text-4xl text-2xl font-bold ml-2 tracking-tight">Curious ⚡️</h1>
        </Link>
      </div>
      {headerContent}
    </header>
  );
}

