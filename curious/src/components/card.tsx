import React from 'react';

type CardProps = {
  title: string;
  description: string;
  image: string;
  url: string;
};

export default function Card(props: CardProps) {
  return (
    <a href={props.url} className="flex flex-col justify-between items-center w-full max-w-sm bg-gray-900 rounded-lg shadow-lg overflow-hidden">
      <div className="flex items-center justify-center w-full h-56 bg-cover bg-center" style={{ backgroundImage: `url(https://i.ytimg.com/vi/Ie5GGRkjSXE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD1LDoieUerBF5I0H1rXT9uL9j3pA)` }}>
      </div>
      <div className="flex flex-col items-center justify-center p-4 w-full">
        <h3 className="text-white font-bold text-xl text-center w-full truncate">{props.title}</h3>
        <span className="text-sm text-gray-200 text-center w-full truncate">{props.description}</span>
      </div>
    </a>

  );
}