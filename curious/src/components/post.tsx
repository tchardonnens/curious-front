import React, { useState } from 'react';
import Card from '@/components/card';
import Image from 'next/image';
import ProfilePic from './profilePic';

interface PostProps {
  /*userPP : string;
  userURL : string;
  username : string;
  prompt : string;
  
  cardTitle: string;
  cardDescription: string;
  cardImage: string;
  cardURL: string;
  time : Date;*/
  removeUserInfo?: string;
  removeDatePadding?: string;
  promptDetailPadding?: string;
  removePostMargin?: string;
};

const Post: React.FC<PostProps> = ({
  removeUserInfo,
  removeDatePadding,
  promptDetailPadding,
  removePostMargin
}) => {
  const [username, setUsername] = useState("John Doe");
  const [prompt, setPrompt] = useState("How to make a website");

  return (
    <div className={`w-full mb-8 ${removePostMargin}`}>
      <div className='flex flex-col justify-start w-full rounded-lg md:p-6 mb-3'>

        <div className={`flex flex-col items-center justify-center gap-2 ${removeUserInfo}`}>
          {/* <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-darkGrey dark:border-white">
            <Image src="/PP-test.png" alt="Avatar" width={200} height={200} className="w-full h-full object-cover" />
          </div> */}
          <ProfilePic src="/PP-test.png" alt="Avatar" addClass='h-10 w-10' />
          <h2 className="text-2xl text-black dark:text-white">{username}</h2>
        </div>

        <div className={`text-neutral-600 dark:text-neutral-400 p-4 mb-3 ${promptDetailPadding}`}>
          <h3>Searched for prompt: <span className='font-medium text-black dark:text-white'>{prompt}</span></h3>
          
          <div className={`text-neutral-600 dark:text-neutral-400 p-4 ${removeDatePadding}`}>
            Monday 12:00 PM
          </div>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6'>
          <Card title={"Neo-brutalism"} description={"Neo-Brutalism refers to a contemporary architectural style and design movement that draws inspiration from the original Brutalist architecture of the mid-20th century. The term Brutalism itself comes from the French word béton brut, meaning raw concrete, which characterizes the predominant material used in these architectural designs."} image={"https://fffuel.co/images/dddepth/dddepth-159.jpg"} url={"https://twitter.com/borab0302"} key={0} displayTwitterIcon="hidden" displayRedditIcon="hidden" />
          <Card title={"User Experience"} description={"User Experience (UX) refers to the overall experience and interaction a person has with a product, system, or service, particularly in terms of how it meets their needs and expectations. It encompasses all aspects of the user's interaction, including their perceptions, emotions, behaviors, and satisfaction."} image={"https://fffuel.co/images/dddepth/dddepth-155.jpg"} url={"https://twitter.com/ChardonnensT"} key={1} displayTwitterIcon="hidden" displayRedditIcon="hidden" />
          <Card title={"Website Anatomy"} description={"Website anatomy refers to the structure and components that make up a website. It refers to the various elements and sections that work together to create a functional and cohesive user experience. Understanding website anatomy is crucial for web designers, developers, and users to navigate and interact effectively with a website."} image={"https://fffuel.co/images/dddepth/dddepth-125.jpg"} url={"https://twitter.com/elonmusk"} key={2} displayTwitterIcon="hidden" displayYoutubeIcon="hidden" />
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Post;