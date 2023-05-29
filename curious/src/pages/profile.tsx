import PageHead from "@/components/head";
import Header from "@/components/header";
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

  return (
    <>
      <PageHead />
      <Header setIsSidebarOpen={setIsSidebarOpen} />

      <div className="flex flex-row w-full h-full overflow-hidden">

      <Sidebar history={history} isSidebarOpen={isSidebarOpen} ></Sidebar>

        <main className="bg-white dark:bg-anthracite p-10 flex w-full flex-col overflow-hidden">
          <div className="flex items-center relative">

            <div className="w-full h-40">
              <Image src="/sf-dream.png" alt="Avatar" width={500} height={200} className="w-full h-full object-cover rounded-t-xl" />
            </div>

            <div className="w-24 h-24 rounded-full overflow-hidden absolute bottom-0 left-6 translate-y-12">
              <Image src="/PP-test.png" alt="Avatar" width={200} height={200} className="w-full h-full object-cover" />
            </div>

          </div>

          <div className="flex flex-col space-y-4 w-1/2 mt-10 px-4">

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