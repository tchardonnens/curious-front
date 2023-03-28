import Card from '@/components/card'
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
      <header className="flex justify-between items-center w-full mt-5 border-b-2 pb-7 sm:px-4 px-2">
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">Curious ⚡️</h1>
      </header>
      <main className="flex flex-1 w-full flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
        <h1 className="sm:text-6xl text-4xl max-w-[708px] font-bold text-slate-900">Learn faster with adaptative content</h1>
        <h2 className="sm:text-1xl text-1xl max-w-[708px] mt-5 text-slate-600">Knowledge portal powered with ChatGPT</h2>
        <div className="max-w-xl w-full" >
          <input className="w-full rounded-md border-solid border-2 border-gray-900 shadow-sm focus:border-black focus:ring-black my-5 p-2" placeholder='How to launch a rocket'>
          </input>
          <button className="w-full bg-black text-white rounded-md p-2">Get content!</button>
        </div>
        <div className="max-w-xl w-full mt-10">
          <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
            Understand the subject 💡
          </h2>
        </div>
        <Card title="test 1" description="test" image="https://i.ytimg.com/vi/16KWWEfJj5w/hqdefault.jpg" url="google.com" ></Card>
        <Card title="test 2" description="test" image="https://i.ytimg.com/vi/PDEcAxfSYaI/hqdefault.jpg" url="google.com" ></Card>
        <Card title="test 3" description="test" image="https://i.ytimg.com/vi/HDsUMqYuUm8/hqdefault.jpg" url="google.com" ></Card>
        <div className="max-w-xl w-full mt-10">
          <h2 className="sm:text-1xl text-4xl font-bold max-w-[708px] mb-10 text-slate-900">
            Want more? 🚀
          </h2>
        </div>
        <Card title="test 1" description="test" image="https://i.ytimg.com/vi/16KWWEfJj5w/hqdefault.jpg" url="google.com" ></Card>
        <Card title="test 2" description="test" image="https://i.ytimg.com/vi/PDEcAxfSYaI/hqdefault.jpg" url="google.com" ></Card>
        <Card title="test 3" description="test" image="https://i.ytimg.com/vi/HDsUMqYuUm8/hqdefault.jpg" url="google.com" ></Card>
      </main>
      <footer className="text-center h-16 sm:h-20 w-full sm:pt-2 pt-4 border-t mt-5 flex sm:flex-row flex-col justify-between items-center px-3 space-y-3 sm:mb-0 mb-3 text-slate-600">
        <p>Built by Thomas Chardo ✌️</p>
      </footer>
    </>
  )
}
