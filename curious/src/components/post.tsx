import React, { useState } from 'react';
import Card from '@/components/card';

type PostProps = {
  /*userPP : string;
  userURL : string;
  username : string;
  prompt : string;
  
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  cardURL: string;
  time : Date;
*/};

export default function Post(props: PostProps) {
  const [username, setUsername] = useState("John Doe");
  const [prompt, setPrompt] = useState("How to make a website");
  return (
    <div className='w-full mb-8'>
      <div className='flex flex-col justify-start w-full rounded-lg p-6 mb-3'>

        <div className='flex flex-col'>
          <h2 className="text-2xl 'text-black dark:text-slate-100' ">{username}</h2>
        </div>

        <div className='text-darkerGrey dark:text-slate-100 p-4 mb-3'>
          <h3>Searched for prompt: <b>{prompt}</b> </h3>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6'>
          <Card title={"Neo-brutalism"} description={"GGWP"} image={"https://fffuel.co/images/dddepth/dddepth-159.jpg"} url={"https://twitter.com/borab0302"} key={0} />
          <Card title={"User Experience"} description={"GGWP"} image={"https://fffuel.co/images/dddepth/dddepth-155.jpg"} url={"https://twitter.com/borab0302"} key={1} />
          <Card title={"Website anatomy"} description={"GGWP"} image={"https://fffuel.co/images/dddepth/dddepth-125.jpg"} url={"https://twitter.com/borab0302"} key={2} />
        </div>
        <div className='text-darkGrey dark:text-slate-200 p-4 justify-start text-left'>
          Monday 12:00 PM
        </div>
      </div>
      <hr />
    </div>
  );
}