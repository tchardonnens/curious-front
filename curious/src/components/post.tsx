import React, { useState } from 'react';
import Card from '@/components/card';
import Image from 'next/image';
import ProfilePic from './profilePic';

interface PostProps {
  prompts: any;
  username: string;
  userPP: string;
  userURL: string;

  removeUserInfo?: string;
  removeDatePadding?: string;
  promptDetailPadding?: string;
  removePostMargin?: string;
};

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const Post: React.FC<PostProps> = ({
  prompts,
  username,
  userPP,
  userURL,
  removeUserInfo,
  removeDatePadding,
  promptDetailPadding,
  removePostMargin
}) => {

  return (
    <div>
      {prompts.map((item: any, index: any) => {
        return (
          <div className={`w-full mb-8 ${removePostMargin}`} key={index}>
            <div className='flex flex-col justify-start w-full rounded-lg md:p-6 mb-3'>

              <div className={`flex flex-col items-center justify-center gap-2 ${removeUserInfo}`}>
                {/* <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-darkGrey dark:border-white">
                  <Image src="/PP-test.png" alt="Avatar" width={200} height={200} className="w-full h-full object-cover" />
                </div> */}
                <ProfilePic src={userPP} alt="Avatar" addClass='h-10 w-10' />
                <h2 className="text-2xl text-black dark:text-white">{username}</h2>
              </div>

              <div className={`text-neutral-600 dark:text-neutral-400 p-4 mb-3 ${promptDetailPadding}`}>
                <h3>Searched for prompt: <span className='font-medium text-black dark:text-white'>{item.prompt.title}</span></h3>
                
                <div className={`text-neutral-600 dark:text-neutral-400 p-4 ${removeDatePadding}`}>
                  Monday 12:00 PM {item.prompt.created_at}
                </div>
              </div>

              <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6'>
                {item.contents.map((item: any, index: any) => {
                  return (
                    <Card title={item.title} description={item.description} image={item.image} url={item.link} key={index} />
                  );
                })}
              </div>
            </div>
            <hr />
          </div>

        );
      })}
    </div>
  );
}

export default Post;