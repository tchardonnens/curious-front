import Link from 'next/link';
import React from 'react';

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full p-5 border-b-2 pb-7 sm:px-4 px-2">
      <Link href="/">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">Curious ⚡️</h1>
      </Link>

      <div className="flex items-center">
        <Link href="/search" className="mr-2">Search</Link>
      </div>
    </header>
  )
}
