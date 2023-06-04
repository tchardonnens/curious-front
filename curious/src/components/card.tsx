import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export default function Card(props: CardProps) {
  return (
    <a href={props.url} className="flex flex-col justify-between items-center w-full max-w-sm bg-white dark:bg-dark rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center w-full h-56 bg-cover bg-center" style={{ backgroundImage: `url(${props.image})` }} />
      <div className="flex flex-col items-center justify-center p-4 w-full">
        <h3 className="text-black dark:text-white font-bold text-xl text-center w-full truncate">{props.title}</h3>
        <span className="text-sm text-black dark:text-gray-200 text-center w-full truncate">{props.description}</span>
      </div>
    </a>

  );
}