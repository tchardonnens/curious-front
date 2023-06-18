import Post from '@/components/post';
import LoadingSkeleton from '@/components/loadingSkeleton';
import { useEffect, useState } from 'react';
import PageHead from '@/components/head';
import Header from '@/components/header';
import Sidebar from '@/components/sidebar';
import { Resources, SidebarProps } from '@/types/props';
import Empty from '@/components/empty';

interface User {
  id: number;
  username: string;
  full_name: string;
  bio: string;
  profile_picture: string;
}

interface PromptContent {
  title: string;
  snippet: string;
  link: string;
  source: string;
  long_description: string;
  image: string;
  id: number;
  is_active: boolean;
}

interface PostData {
  user: User;
  prompt: {
    title: string;
    user_id: number;
    id: number;
    created_at: string;
  };
  subject: string;
  contents: PromptContent[];
}

export default function Home() {
  const [resources, setResources] = useState<Resources>()
  const [history, setHistory] = useState<SidebarProps[]>([])
  const [username, setUsername] = useState('');
  const [userPP, setUserPP] = useState('');
  const [prompts, setPrompts] = useState<PostData[]>([]);
  const [loading, setLoading] = useState(true);


  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

  useEffect(() => {
    let isMounted = true; // This flag is used to prevent setting state on an unmounted component
    const getPrompts = async () => {
      const token = localStorage.getItem('authToken');

      try {
        const response = await fetch(`${API_BASE_URL}/feed`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);
        if (isMounted) {
          setPrompts(data);
          setLoading(false);
        }
      } catch (error) {
        console.error('An error occurred while getting prompts:', error);
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    getPrompts();
    console.log(prompts);
    // Cleanup
    return () => {
      isMounted = false;
    };

  }, []);


  return (
    <>
      <PageHead />
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsSidebarVisible={setIsSidebarVisible} />

      <div className="flex flex-row w-full h-full overflow-hidden">

        <Sidebar history={history} isSidebarOpen={isSidebarOpen} isSidebarVisible={isSidebarVisible} />

        <main className="bg-lightGrey dark:bg-anthracite flex w-full flex-col items-center justify-center text-center">
          <div className="w-full h-full flex flex-col items-center justify-start px-4 sm:px-10 pt-4 pb-8 sm:py-10 overflow-scroll">
            {(!resources && !loading) &&
              <Empty emoji="🧐" title="No curious topics" subtitle="Looks like there's nothing to explore... yet!" />
            }
            {/* {(resources || loading) && <div className="max-w-xl w-full mt-2">
              <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-5 text-dark dark:text-white">
                My feed 😀
              </h2>
            </div>} */}

            {prompts.sort((a, b) => new Date(b.prompt.created_at).getTime() - new Date(a.prompt.created_at).getTime()).map((post: PostData, index: any) => (
              <Post
                key={index}
                post={post}
                username={post.user.full_name}
                userPP={userPP}
              />
            ))}
            {loading && <LoadingSkeleton />}
          </div>
        </main>
      </div>
    </>
  )
}