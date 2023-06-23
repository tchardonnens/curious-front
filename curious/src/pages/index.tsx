import PageHead from '@/components/head';
import Header from '@/components/header';
import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter'

export default function Home() {
  const [text] = useTypewriter({
    words: ['How to launch a rocket', 'What is ethical hacking', 'How to cook a perfect steak'],
    loop: true,
  });

  return (
    <>
      <PageHead />
      <Header />
      <main id="home" className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">

        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-black">Learn faster with adaptative content</h1>
        <h2 className="sm:text-1xl text-1xl max-w-[708px] mt-5 text-neutral-600">A knowledge portal teaching to your pace</h2>

        <div className="max-w-xl w-full" >
          <div className="w-full rounded-md border-solid border-2 border-gray-900 shadow-sm focus:border-black focus:ring-black my-5 p-2 text-left text-placeholder">
            <span>{text}</span>
            <Cursor />
          </div>
          <button className="w-full bg-black text-white rounded-md p-2 group relative" disabled>
            Get content!
            {/* To change text content on hover */}
            {/* <span className='group-hover:hidden'>Get content!</span>
            <span className="hidden group-hover:inline">Sign in!</span> */}
            <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-40 animate-shine" />
          </button>

        </div>

        {/* <div className="max-w-xl w-full mt-10">
          <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
            Understand the subject 💡
          </h2>
        </div>
        <div className="max-w-xl w-full mt-10">
          <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
            Want more? 🚀
          </h2>
        </div> */}
      </main>
    </>
  )
}
