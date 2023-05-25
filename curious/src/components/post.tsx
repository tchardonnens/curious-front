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
    const [username, setUsername] = useState("Elo");
    const [prompt, setPrompt] = useState("Comment pecho?");

  return (
    <div className='w-full mb-8'>
        <div className='flex flex-col justify-start w-full rounded-lg md:p-6 mb-3'>
        
            <div className='flex flex-col'>
                <h2 className="text-2xl text-black dark:text-white">{username}</h2>
            </div>
            
            <div className='text-darkerGrey dark:text-white p-4 mb-3'>
                <h3>Searched for prompt: <b>{prompt}</b> </h3>
                
                
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6'>
                    <Card title={"cardTitle "} description={"description"} image={"image"} url={"url"} key={0} />
                    <Card title={"cardTitle 2 "} description={"description"} image={"image"} url={"url"} key={0} />
                    <Card title={"cardTitle 3"} description={"description"} image={"image"} url={"url"} key={0} />
            </div>
            <div className='text-darkGrey dark:text-slate-200 p-4 justify-start text-left'>
                time
            </div>
        </div>
        <hr />
    </div>
  );
}