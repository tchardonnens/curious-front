import { SidebarPropsList } from '@/types/props';
import React from 'react';


export default function Sidebar(props: SidebarPropsList) {
  return (
    // sidebar as a list of buttons
    <div className="flex-1 flex overflow-hidden">
      <div className="narrow-sidebar hidden lg:block lg:flex-shrink-0 lg:bg-gray-800 lg:overflow-y-auto">
        <div className="relative w-60 flex space-y-16 flex-col p-3">

          {props.history.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
                <h1 className="text-2xl font-bold text-white">{item.header}</h1>
                <p className="text-white">{item.description}</p>
              </div>
            );
          })}


        </div>
      </div>
    </div>

  );
}