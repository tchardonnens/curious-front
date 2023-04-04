import Card from '@/components/card'
import LoadingSkeleton from '@/components/LoadingSkeleton';
import Head from 'next/head'
import { useState } from 'react'

type Subject = {
  name: string;
  description: string;
}

type SubjectsList = {
  basic_subjects: Subject[];
  deeper_subjects: Subject[];
}

type YoutubeVideoSimple = {
  title: string;
  description: string;
  url: string;
  image: string;
}

type Resources = {
  chatgpt: SubjectsList;
  content: YoutubeVideoSimple[];
}

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [resources, setResources] = useState<Resources>()
  const [loading, setLoading] = useState(false)

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
      <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">Curious ⚡️</h1>
      </header>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">Learn faster with adaptative content</h1>
        <h2 className="sm:text-1xl text-1xl max-w-[708px] mt-5 text-slate-600">Knowledge portal powered with ChatGPT</h2>
        <form className="max-w-xl w-full" onSubmit={(e) => { e.preventDefault(); fetchResources(); }}>
          <input className="w-full rounded-md border-solid border-2 border-gray-900 shadow-sm focus:border-black focus:ring-black my-5 p-2" placeholder='How to launch a rocket' value={prompt} onChange={e => setPrompt(e.target.value)} />
          <button className="w-full bg-black text-white rounded-md p-2" onClick={fetchResources} type="button">Get content!</button>
        </form>

        {(resources || loading) && <div className="max-w-xl w-full mt-10">
          <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
            Understand the subject 💡
          </h2>
        </div>}

        {loading && <LoadingSkeleton />}
        {
          resources?.
            content.map((resource, index) => {
              return (
                <Card title={resource.title} description={resource.description} image={resource.image} url={resource.url} key={index} />
              )
            })
        }
        {(resources || loading) && <div className="max-w-xl w-full mt-10">
          <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
            Want more? 🚀
          </h2>
        </div>
        }
        {loading && <LoadingSkeleton />}
      </main>
      <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 text-slate-600">
        <p>Built by Thomas Chardo ✌️</p>
      </footer>
    </>
  )
}
