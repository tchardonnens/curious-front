import Header from "@/components/header";
import ProfileSidebar from "@/components/profileSidebar";
import Head from 'next/head';


export default function Profile(){
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
            
  
          </main>
        </div>
      </>
    )
  }