import Card from '@/components/card';
import LoadingSkeleton from '@/components/loadingSkeleton';
import { SetStateAction, useEffect, useState } from 'react';
import PageHead from '@/components/head';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Resources, SidebarProps } from '@/types/props';

import { FiSend } from 'react-icons/fi';

import Empty from '@/components/empty';

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [resources, setResources] = useState<Resources[]>()
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<SidebarProps[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    getPrompts();
  }, []);

  const getPrompts = async () => {
    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch(`${API_BASE_URL}/prompts/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      response.json().then((data) => {
        console.log(data);
        setHistory(data);
      });
    } catch (error) {
      console.error('An error occurred while getting prompts:', error);
      throw error;
    }
  };

  const handleTextareaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPrompt(event.target.value);
    event.target.style.height = 'auto';
    event.target.style.height = event.target.scrollHeight + 'px';
  };

  const fetchResources = async () => {
    const resetData: SetStateAction<Resources[] | undefined> = []
    setResources(resetData)
    const token = localStorage.getItem('authToken');
    console.log(prompt)
    setLoading(true)
    console.log('fetching...')

    const res = await fetch(`${API_BASE_URL}/curious`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
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
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsSidebarVisible={setIsSidebarVisible} />

      <div className="flex flex-row w-full h-full overflow-hidden">

        <Sidebar history={history} isSidebarOpen={isSidebarOpen} isSidebarVisible={isSidebarVisible} />

        <main className="bg-lightGrey dark:bg-anthracite flex w-full flex-col items-center justify-center text-center">
          <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-10 pt-4 pb-8 sm:py-10 overflow-scroll">
            {(!resources && !loading) &&
              <Empty />
            }
            {(resources || loading) && <div className="max-w-xl w-full mt-2">
              <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-5 text-dark dark:text-white">
                Understand the subject 💡
              </h2>
            </div>}

            {loading && <LoadingSkeleton />}

            {resources && resources.map((resource, index) => {
              return (
                <div key={index} className="flex flex-col items-center justify-center">
                  <h2 className='text-3xl mb-4 font-semibold text-neutral-600 dark:text-neutral-400'>{resource.subject.title}</h2>
                  <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6 mb-5'>
                    {resource.content.youtube.map((result, idx) => (
                      <Card
                        key={idx}
                        title={result.title}
                        description={result.snippet}
                        image={result.image}
                        url={result.link}
                        displayTwitterIcon="hidden"
                        displayRedditIcon="hidden"
                      />
                    ))}
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6 mb-5'>
                    {resource.content.reddit.map((result, idx) => (
                      <Card
                        key={idx}
                        title={result.title}
                        description={result.snippet}
                        image={result.image}
                        url={result.link}
                        displayTwitterIcon="hidden"
                        displayYoutubeIcon="hidden"
                      />
                    ))}
                  </div>
                  <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6 mb-5'>
                    {resource.content.twitter.map((result, idx) => (
                      <Card
                        key={idx}
                        title={result.title}
                        description={result.snippet}
                        image={result.image}
                        url={result.link}
                        displayRedditIcon="hidden"
                        displayYoutubeIcon="hidden"
                      />
                    ))}
                  </div>
                </div>
              )
            })}
            
          </div>

          <form className="max-w-xl w-full px-4 sm:px-10 pb-4 sm:pb-10 relative z-9 bg-transparent" onSubmit={(e) => { e.preventDefault(); fetchResources(); }}>
            <div className='w-auto h-fit-content rounded-md border-solid border-2 border-darkerGrey dark:border-darkGrey flex flex-row shadow-sm p-1'>
              <textarea className="w-full text-black dark:text-darkGrey bg-transparent resize-none outline-none p-1 overflow-y-hidden max-h-24" rows={1} placeholder='How to launch a rocket' value={prompt}
                onChange={(e) => {
                  setPrompt(e.target.value);
                  handleTextareaChange(e);
                }} />
              <button className='py-1 px-2 rounded-md hover:bg-grey hover:dark:bg-darkerGrey transition' onClick={fetchResources} type="button" title='Send' >
                <FiSend className='shrink-0 grow-0 text-black dark:text-darkGrey' />
              </button>
            </div>
          </form>

        </main>
      </div>
    </>
  )
}