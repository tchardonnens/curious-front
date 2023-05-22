import Card from '@/components/card';
import Post from '@/components/post';
import LoadingSkeleton from '@/components/loadingSkeleton';
import { useState } from 'react';
import PageHead from '@/components/head';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Resources, SidebarProps } from '@/types/props';

export default function Home() {
  const [prompt, setPrompt] = useState('')
  const [resources, setResources] = useState<Resources>()
  const [loading, setLoading] = useState(false)
  const [history, setHistory] = useState<SidebarProps[]>([])

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <PageHead />
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-row w-full h-full overflow-hidden">

        <Sidebar history={history} isSidebarOpen={isSidebarOpen} ></Sidebar>

        <main className="bg-white dark:bg-anthracite flex w-full flex-col items-center justify-center text-center">
          <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-10 pt-4 pb-8 sm:py-10 overflow-scroll">
            {(resources || loading) && <div className="max-w-xl w-full mt-10">
              <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
                My feed 😀
              </h2>
            </div>}
            <Post />
            <Post />
            <Post />
            <Post />
            {loading && <LoadingSkeleton />}
            {
              resources?.
                content.map((resource, index) => {
                  return (
                    <Card title={resource.title} description={resource.description} image={resource.image} url={resource.url} key={index} />
                  )
                })
            }
          </div>
        </main>
      </div>
    </>
  )
}