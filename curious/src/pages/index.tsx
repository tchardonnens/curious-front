import Header from '@/components/header';
import Head from 'next/head'

export default function Home() {
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
      <main className="flex flex-1 w-full h-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">Learn faster with adaptative content</h1>
        <h2 className="sm:text-1xl text-1xl max-w-[708px] mt-5 text-slate-600">Knowledge portal powered with ChatGPT</h2>
      </main>
    </>
  )
}
