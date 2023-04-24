import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function Header() {
  const router = useRouter();
  let headerContent;
  if (router.pathname === '/feed' || router.pathname === '/search') {
    headerContent = (
      <>
        <div className='flex flex-row items-center gap-5'>
          <div className="text-center">
            <Link href="/search" className="text-black dark:text-darkGrey font-semibold px-3 py-1 border-2 border-transparent hover:border-black hover:dark:border-darkGrey rounded-3xl">Search</Link>
          </div>
          <div className="text-center">
            <Link href="/feed" className="text-black dark:text-darkGrey font-semibold px-3 py-1 border-2 border-transparent hover:border-black hover:dark:border-darkGrey rounded-3xl">Feed</Link>
          </div>
        </div>
        <div className='h-10 w-10 border-2 border-black dark:border-darkGrey rounded-full overflow-hidden cursor-pointer'>
          <img className='w-full height-full' src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tos-alisg-avt-0068/e7452032d5c35c9dff5d2815c50c572e.jpeg?x-expires=1682103600&x-signature=iX732AUEqgL4EQOkVExlDhKNdok%3D" alt="User" />
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