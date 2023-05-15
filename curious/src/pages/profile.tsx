import Header from "@/components/header";
import ProfileSidebar from "@/components/profileSidebar";
import Head from 'next/head';
import Image from 'next/image';

interface ProfileProps {
  username: string;
  bio: string;
  followers: number;
  following: number;
}

export default function Profile(props: ProfileProps) {
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

        <ProfileSidebar></ProfileSidebar>



        <main className="bg-white dark:bg-anthracite p-10 flex w-full flex-col items-center justify-center text-center overflow-hidden">
          <div className="bg-white border rounded shadow p-6 w-full">
            <div className="flex items-center mb-4">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image src="PP-test.png" alt="Avatar" className="w-full h-full object-cover" />
              </div>
            </div>

            <div className="flex flex-col">
              <div className="flex">
                <p>@username</p>
              </div>
              <div className="flex">
                <p className="text-gray-700">Bio</p>
              </div>
              <div className="flex flex-row">
                <div className="flex-none w-40">
                  <span className="text-gray-600 pr-4">Followers</span>
                  <span className="font-bold">290</span>
                </div>
                <div className="flex-none w-40">
                  <span className="text-gray-600 pr-4">Following</span>
                  <span className="font-bold">312</span>
                </div>
              </div>
            </div>

          </div>
        </main>
      </div>
    </>
  )
}