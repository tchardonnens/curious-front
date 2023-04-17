import { SidebarPropsList } from '@/types/props';
import React from 'react';
import useColorMode from '../../hooks/useColorMode';


export default function Sidebar(props: SidebarPropsList) {
  const [colorMode, setColorMode] = useColorMode();

  return (
    // sidebar as a list of buttons
    <div className="w-72 flex bg-lightGrey dark:bg-black">
      <div className="px-4 flex flex-col gap-2 justify-between narrow-sidebar w-full lg:flex-shrink-0 lg:overflow-y-auto">
        <div className="py-4">
          <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey border-2 border-darkerGrey dark:border-darkGrey transition-colors">New search</button>
        </div>
        <div className="py-4 border-t border-solid border-darkGrey">
          <button className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey">Clear searches</button>
          <button onClick={() => setColorMode(colorMode === 'light' ? 'dark' : 'light')} className="text-darkerGrey dark:text-darkGrey w-full px-4 py-3 rounded-lg hover:bg-grey dark:hover:bg-darkerGrey">Light/Dark Mode</button>
        </div>


        {/* {props.history.map((item) => {
            return (
              <div className="flex flex-col items-center justify-center text-center px-4 mt-12 sm:mt-20">
                <h1 className="text-2xl font-bold text-white">{item.header}</h1>
                <p className="text-white">{item.description}</p>
              </div>
            );
          })} */}


      </div>
    </div>

  );
}