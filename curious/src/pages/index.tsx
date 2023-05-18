import PageHead from '@/components/head';
import Header from '@/components/header';
import React from 'react';
import {useTypewriter, Cursor} from 'react-simple-typewriter'

export default function Home() {
  const [text] = useTypewriter({
    words: ['How to launch a rocket', 'What is ethical hacking', 'How to cook a perfect steak'],
    loop: true,
  });

  return (
    <>
      <PageHead />
      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4">
        
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">Learn faster with adaptative content</h1>
        <h2 className="sm:text-1xl text-1xl max-w-[708px] mt-5 text-slate-600">Knowledge portal powered with ChatGPT</h2>
        
        <div className="max-w-xl w-full" >
          <div className="w-full rounded-md border-solid border-2 border-gray-900 shadow-sm focus:border-black focus:ring-black my-5 p-2 text-left text-placeholder">
            <span>{text}</span>
            <Cursor />
          </div>
          <button className="w-full bg-black text-white rounded-md p-2" disabled>Get content!</button>
        
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
