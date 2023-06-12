import PageHead from "@/components/head";
import Header from "@/components/header";
import ProfilePic from "@/components/profilePic";
import Sidebar from "@/components/sidebar";
import { Resources, SidebarProps } from '@/types/props';
import Image from "next/image";
import React, { useState } from "react";

interface ProfileProps {
  name: string;
  username: string;
  bio: string;
  followers: number;
  following: number;
}

const Profile: React.FC<ProfileProps> = ({
  name,
  username,
  bio = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl. Donec euismod, diam quis aliquam ultricies, nunc nisl ultricies nunc, vitae ultricies nisl nunc eu nisl.",
  followers,
  following
}) => {
  const [history, setHistory] = useState<SidebarProps[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  return (
    <>
      <PageHead />
      <Header setIsSidebarOpen={setIsSidebarOpen} setIsSidebarVisible={setIsSidebarVisible} />

      <div className="flex flex-row w-full h-full overflow-hidden">

        <Sidebar history={history} isSidebarOpen={isSidebarOpen} isSidebarVisible={isSidebarVisible} />
        
        <main className="bg-lightGrey dark:bg-anthracite p-10 flex w-full flex-col overflow-hidden">
          <div className="flex items-center relative">

            <div className="w-full h-40">
              <Image src="/sf-dream.png" alt="Avatar" width={500} height={200} className="w-full h-full object-cover rounded-t-xl" />
            </div>

            <ProfilePic src="/PP-test.png" alt="Avatar" addClass='w-24 h-24 absolute bottom-0 left-6 translate-y-12 border-none' />

          </div>

          <div className="flex flex-col space-y-4 w-full max-w-[580px] mt-10 px-4">

            <div className="flex flex-row gap-4 items-center pt-6">
              <div className="font-semibold text-lg text-black dark:text-white">
                Name{name}
              </div>

              <div className="text-darkerGrey dark:text-darkGrey">
                @username{username}
              </div>
            </div>

            <div className="text-darkerGrey dark:text-darkGrey">
              {bio}
            </div>

            <div className="flex flex-row gap-6">
              <div className="text-darkerGrey dark:text-darkGrey">
                <span className="font-semibold text-black dark:text-white mr-2">200{following}</span>
                Following
              </div>

              <div className="text-darkerGrey dark:text-darkGrey">
                <span className="font-semibold text-black dark:text-white mr-2">180{followers}</span>
                Followers
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default Profile;