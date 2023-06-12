import React from 'react';
import { FaRedditAlien, FaTwitter, FaYoutube } from 'react-icons/fa';

type CardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
  displayYoutubeIcon?: string;
  displayRedditIcon?: string;
  displayTwitterIcon?: string;
};

export default function Card(props: CardProps) {
  
  return (
    <a href={props.url} className="flex flex-col justify-between items-center w-full max-w-sm bg-white dark:bg-dark rounded-xl overflow-hidden p-4 group">
      <div className='h-full w-full overflow-hidden rounded-md'>
        <div className="flex items-center justify-center w-full aspect-w-4 aspect-h-3 bg-cover bg-center rounded-md transition duration-300 overflow-hidden group-hover:scale-110 relative z-0" style={{ backgroundImage: `url(${props.image})` }} />
      </div>
      
      <div className="flex flex-col items-start justify-center pt-4 w-full text-left">
        <div className='flex flex-row gap-2 items-center'>
          <FaYoutube size={25} className={`block text-black dark:text-white ${props.displayTwitterIcon}`} />
          <FaRedditAlien size={25} className={`block text-black dark:text-white ${props.displayRedditIcon}`} />
          <FaTwitter size={25} className={`block text-black dark:text-white ${props.displayYoutubeIcon}`} />
          <h3 className="text-black dark:text-white font-medium text-xl w-full truncate">{props.title}</h3>
        </div>
        <div className='w-full h-[60px]'>
          <span className="text-sm text-neutral-600 dark:text-neutral-400 w-full line-clamp-3">{props.description}</span>
        </div>
      </div>
    </a>
  );
}