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
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <>
      <PageHead />
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsSidebarVisible={setIsSidebarVisible} />

      <div className="flex flex-row w-full h-full overflow-hidden">

        <Sidebar history={history} isSidebarOpen={isSidebarOpen} isSidebarVisible={isSidebarVisible}></Sidebar>

        <main className="bg-white dark:bg-anthracite flex w-full flex-col items-center justify-center text-center">
          <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-10 pt-4 pb-8 sm:py-10 overflow-scroll">
            {(resources || loading) && <div className="max-w-xl w-full mt-10">
              <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
                My feed 😀
              </h2>
            </div>}
            <Post />
            {loading && <LoadingSkeleton />}
          </div>
        </main>
      </div>
    </>
  )
}