import PageHead from "@/components/head";
import Header from "@/components/header";
import Post from "@/components/post";
import ProfilePic from "@/components/profilePic";
import Sidebar from "@/components/sidebar";
import { Resources, SidebarProps } from '@/types/props';
import { time } from "console";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

interface Content {
  title: string;
  snippet: string;
  link: string;
  source: string;
  long_description: string;
  image: string;
  id: number;
  is_active: boolean;
}

interface Prompt {
  title: string;
  user_id: number;
  id: number;
  created_at: string;
}

interface PostData {
  prompt: Prompt;
  subject: string;
  contents: Content[];
}

const Profile = () => {
  const [history, setHistory] = useState<SidebarProps[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [full_name, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [userPP, setUserPP] = useState('');
  const [bio, setBio] = useState('');
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);
  const [prompts, setPrompts] = useState<PostData[]>([]);

  useEffect(() => {
    getProfile();
    getPrompts();
  }, []);

  const getProfile = async () => {
    const token = localStorage.getItem('authToken');
    try {
      const response = await fetch(`${API_BASE_URL}/users/me`, {
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
        setFullName(data.full_name);
        setUsername(data.username);
        setUserPP(data.userPP);
        setBio(data.bio);
        setFollowers(data.followers);
        setFollowing(data.following);
      });
    } catch (error) {
      console.error('An error occurred while registering:', error);
      throw error;
    }
  };

  const getPrompts = async () => {
    const token = localStorage.getItem('authToken');

    try {
      const response = await fetch(`${API_BASE_URL}/prompts/profile/me`, {
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
        setPrompts(data);
      });
    } catch (error) {
      console.error('An error occurred while getting prompts:', error);
      throw error;
    }
  };

  return (
    <>
      <PageHead />
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsSidebarVisible={setIsSidebarVisible} />

      <div className="flex flex-row w-full h-full overflow-hidden">

        <Sidebar history={history} isSidebarOpen={isSidebarOpen} isSidebarVisible={isSidebarVisible} />

        <main className="bg-lightGrey dark:bg-anthracite p-10 flex w-full flex-col overflow-x-hidden overflow-y-auto">
          <div className="flex items-center relative">

            <div className="w-full h-40">
              <Image src="/sf-dream.png" alt="Avatar" width={500} height={200} className="w-full h-full object-cover rounded-t-xl" />
            </div>

            <ProfilePic src="/PP-test.png" alt="Avatar" addClass='w-24 h-24 absolute bottom-0 left-6 translate-y-12 border-none' />

          </div>

          <div className="flex flex-col space-y-4 w-full max-w-[580px] my-10 px-4">


            <div className="flex flex-row gap-4 items-center pt-6">
              <div className="font-semibold text-lg text-black dark:text-white">
                {full_name}
              </div>

              <div className="text-darkerGrey dark:text-darkGrey">
                @{username}
              </div>
            </div>

            <div className="text-darkerGrey dark:text-darkGrey">
              {bio}
            </div>

            <div className="flex flex-row gap-6">
              <div className="text-darkerGrey dark:text-darkGrey">
                <span className="font-semibold text-black dark:text-white mr-2">{following}</span>
                Following
              </div>

              <div className="text-darkerGrey dark:text-darkGrey">
                <span className="font-semibold text-black dark:text-white mr-2">{followers}</span>
                Followers
              </div>
            </div>
          </div>
          {prompts.sort((a, b) => new Date(b.prompt.created_at).getTime() - new Date(a.prompt.created_at).getTime()).map((post: any, index: any) => (
            <Post
              key={index}
              post={post}
              username={username}
              userPP={userPP}
              removeUserInfo="hidden"
              removeDatePadding="px-0"
              promptDetailPadding="px-0"
              removePostMargin="mb-0"
            />
          ))}
        </main>
      </div>
    </>
  )
}

export default Profile;