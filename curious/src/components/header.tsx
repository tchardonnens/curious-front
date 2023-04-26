import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
  const router = useRouter();
  let headerContent;
  let searchLinkClassName = ' font-semibold px-3 py-1 border-2 rounded-3xl duration-200 ease-in-out';
  let feedLinkClassName = ' font-semibold px-3 py-1 border-2 rounded-3xl duration-200 ease-in-out';

  if (router.pathname === '/feed') {
    feedLinkClassName += ' border-black text-black dark:border-darkGrey dark:text-darkGrey ';
    searchLinkClassName += ' border-darkGrey text-darkGrey hover:border-darkerGrey hover:text-darkerGrey dark:border-darkerGrey dark:text-darkerGrey dark:hover:border-darkGrey hover:dark:text-darkGrey ';
  } else if (router.pathname === '/search') {
    searchLinkClassName += ' border-black text-black dark:border-darkGrey dark:text-darkGrey';
    feedLinkClassName += ' border-darkGrey text-darkGrey hover:border-darkerGrey hover:text-darkerGrey dark:border-darkerGrey dark:text-darkerGrey dark:hover:border-darkGrey hover:dark:text-darkGrey ';
  }

  if (router.pathname === '/feed' || router.pathname === '/search') {
    headerContent = (
      <>
        <div className='flex flex-row items-center gap-5'>
          <div className="text-center">
            <Link href="/search" className={searchLinkClassName}>Search</Link>
          </div>
          <div className="text-center">
            <Link href="/feed" className={feedLinkClassName}>Feed</Link>
          </div>
        </div>
        <div className='h-10 w-10 border-2 border-black dark:border-darkGrey rounded-full overflow-hidden cursor-pointer'>
          <img className='w-full height-full' src="https://pyxis.nymag.com/v1/imgs/d6a/dc7/4a5001b7beea096457f480c8808572428b-09-roll-safe.rsquare.w700.jpg" alt="User" />
        </div>
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
