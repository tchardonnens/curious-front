import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export default function Card(props: CardProps) {
  return (
    <a href={props.url} className="flex flex-col justify-between items-center w-full max-w-sm bg-white dark:bg-dark rounded-xl overflow-hidden p-4">
      <div className="flex items-center justify-center w-full aspect-w-4 aspect-h-3 bg-cover bg-center rounded-md" style={{ backgroundImage: `url(${props.image})` }} />
      <div className="flex flex-col items-center justify-center pt-4 w-full text-left">
        <h3 className="text-black dark:text-white font-medium text-xl w-full truncate">{props.title}</h3>
        <div className='w-full h-[60px]'>
          <span className="text-sm text-neutral-600 dark:text-neutral-400 w-full line-clamp-3">{props.description}</span>
        </div>
      </div>
    </a>

  );
}