import Card from '@/components/card'
import LoadingSkeleton from '@/components/loadingSkeleton';
import Head from 'next/head'
import { useState } from 'react'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar';
import { Resources, SidebarProps } from '@/types/props';

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [resources, setResources] = useState<Resources>()
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<SidebarProps[]>([])

  const fetchResources = async () => {
    console.log(prompt)
    setLoading(true)
    console.log('fetching')
    // post request to /curious
    const res = await fetch('http://127.0.0.1:8000/curious', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    })
    const data = await res.json()
    setResources(data)
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Curious</title>
        <meta name="description" content="Knowledge portal powered with ChatGPT" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Curious" />
        <meta property="og:description" content="Knowledge portal powered with ChatGPT" />
        <meta property="og:image" content="/sf-dream.png" />
        <meta property="og:url" content="https://verycurious.xyz" />
      </Head>
      <Header />

      <div className="flex flex-row w-full h-full">
        <Sidebar history={history}></Sidebar>
        <main className="bg-white dark:bg-dark p-10 flex w-full flex-col items-center justify-center text-center">
          <div className="w-full h-full"></div>
          <form className="max-w-xl w-full " onSubmit={(e) => { e.preventDefault(); fetchResources(); }}>
            <input className="w-full bg-transparent rounded-md border-solid border-2 border-gray-900 dark:border-darkGrey text-black dark:text-darkGrey shadow-sm focus:border-black focus:ring-black my-5 p-2" placeholder='How to launch a rocket' value={prompt} onChange={e => setPrompt(e.target.value)} />
            <button className="w-full bg-black dark:bg-grey text-white dark:text-black rounded-md p-2" onClick={fetchResources} type="button">Get content!</button>
          </form>
        </main>
      </div>
    </>
  )
}
