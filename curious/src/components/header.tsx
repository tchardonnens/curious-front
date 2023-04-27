import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useEffect, useRef } from 'react';

export default function Header() {
  const router = useRouter();
  let headerContent;
  const indicatorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const path = router.pathname;
    if (indicatorRef.current) {
      if (path === '/feed') {
        indicatorRef.current.style.left = '0';
        indicatorRef.current.style.transform = 'translateX(131.3333%)';
      } else if (path === '/search') {
        indicatorRef.current.style.right = '0';
        indicatorRef.current.style.transform = 'translateX(-131.3333%)';
      }
    }
  }, [router.pathname]);

  if (router.pathname === '/feed' || router.pathname === '/search') {
    headerContent = (
      <>
        <div className='bg-lightGrey dark:bg-darkerGrey rounded-full p-2 flex flex-row items-center gap-5 relative'>
          <Link href="/search" className='text-center w-16 relative z-10'>
            Search
          </Link>
          <Link href="/feed" className='text-center w-16 relative z-10'>
            Feed
          </Link>
          <div className="indicator absolute z-0 bottom-1/6 top-1/6 h-5/6 w-5/12 bg-white dark:bg-black rounded-full transform transition-all duration-300 ease-in-out" ref={indicatorRef}></div>
        </div>
        <Link href="/profile" className='h-10 w-10 border-2 border-black dark:border-darkGrey rounded-full overflow-hidden cursor-pointer'>
          <img className='w-full height-full' src="https://pyxis.nymag.com/v1/imgs/d6a/dc7/4a5001b7beea096457f480c8808572428b-09-roll-safe.rsquare.w700.jpg" alt="User" />
        </Link>
      </>
    );
  } else if (router.pathname === '/signup' || router.pathname === '/signin') {
    headerContent = null;
  } else {
    headerContent = (
      <div className='flex flex-row gap-4'>
        <Link href="/signup">
          <button className="bg-white text-black border-solid border-2 border-black rounded-md py-1 px-4">Sign Up</button>
        </Link>
        <Link href="/signin">
          <button className="bg-black text-white border-solid border-2 border-black rounded-md py-1 px-4">Sign In</button>
        </Link>
      </div>
    );
  }

  return (
    <header className="bg-white dark:bg-black text-black dark:text-white flex justify-between items-center w-full p-5 border-b-2 border-lightGrey dark:border-black pb-7 sm:px-4 px-2">
      <Link href="/">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">Curious ⚡️</h1>
      </Link>
      {headerContent}
    </header>
  );
}
