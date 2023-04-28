import Card from '@/components/card';
import LoadingSkeleton from '@/components/loadingSkeleton';
import { useState } from 'react';
import PageHead from '@/components/head';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Resources, SidebarProps } from '@/types/props';

import { FiSend } from 'react-icons/fi';

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [resources, setResources] = useState<Resources>()
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<SidebarProps[]>([])

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

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
      <PageHead />
      <Header />

      <div className="flex flex-row w-full h-full">

        <Sidebar history={history}></Sidebar>
        
        <main className="bg-white dark:bg-anthracite p-10 flex w-full flex-col items-center justify-center text-center overflow-hidden">
          <div className="w-full h-full overflow-scroll flex flex-col items-center justify-start">
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
          </div>

          <form className="max-w-xl w-full " onSubmit={(e) => { e.preventDefault(); fetchResources(); }}>
            <div className='w-auto h-fit-content rounded-md border-solid border-2 border-darkerGrey dark:border-darkGrey flex flex-row shadow-sm p-1'>
              <textarea className="w-full bg-transparent text-black dark:text-darkGrey resize-none outline-none p-1 overflow-y-hidden max-h-24" rows={1} placeholder='How to launch a rocket' value={prompt} 
              onChange={(e) => {
                setPrompt(e.target.value);
                handleTextareaChange(e);
              }} />
              <button className='py-1 px-2 rounded-md hover:bg-lightGrey hover:dark:bg-darkerGrey' onClick={fetchResources} type="button" title='Send' >
                <FiSend className='shrink-0 grow-0 text-black dark:text-darkGrey' />
              </button>
            </div>
          </form>

        </main>
      </div>
    </>
  )
}