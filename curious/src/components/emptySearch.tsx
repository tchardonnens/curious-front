import Image from "next/image";
import Card from "./card";
import { FaRedditAlien, FaTwitter, FaYoutube } from 'react-icons/fa';

const EmptySearch = () => {

    return (
        <div className="w-full h-full">
            <div className='w-full h-full flex flex-col justify-center rounded-lg md:p-6'>
                <div className="flex flex-col items-center justify-center gap-2">
                <h2 className="text-2xl text-black dark:text-white">Unlock the power of AI</h2>
                </div>
                <div className="flex flex-col justify-center items-center text-neutral-600 dark:text-neutral-400 p-4 mb-3">
                <h3>Expand your curiosity by searching on your favorite platforms</h3>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-4'>
                    <Card title="How to launch a rocket?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" image="youtube_search_placeholder.jpg" icon={FaYoutube} />
                    <Card title="Rocket Builders" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" image="reddit_search_placeholder.jpg" icon={FaRedditAlien} />
                    <Card title="How is a rocket reactor build?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" image="twitter_search_placeholder.jpg" icon={FaTwitter} />
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-4'>
                    <Card title="How to launch a rocket?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" image="youtube_search_placeholder.jpg" icon={FaYoutube} />
                    <Card title="Rocket Builders" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" image="reddit_search_placeholder.jpg" icon={FaRedditAlien} />
                    <Card title="How is a rocket reactor build?" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate" image="twitter_search_placeholder.jpg" icon={FaTwitter} />
                </div>
            </div>
        </div>
    );
}

export default EmptySearch;