import React from 'react';
import Card from '@/components/card';
import ProfilePic from './profilePic';
import TimestampConverter from './timestampConverter';

interface PromptContent {
  title: string;
  snippet: string;
  link: string;
  source: string;
  long_description: string;
  image: string;
  id: number;
  is_active: boolean;
}

interface PostData {
  prompt: {
    title: string;
    user_id: number;
    id: number;
    created_at: string;
  };
  subject: string;
  contents: PromptContent[];
}

interface PostProps {
  post: PostData;
  username: string;
  userPP: string;
  removeUserInfo?: string;
  removeDatePadding?: string;
  promptDetailPadding?: string;
  removePostMargin?: string;
};

const Post: React.FC<PostProps> = ({
  post,
  username,
  userPP = '/PP-test.png',
  removeUserInfo,
  removeDatePadding,
  promptDetailPadding,
  removePostMargin
}) => {
  console.log(post);

  return (
    <div className={`w-full mb-8 ${removePostMargin}`}>
      <div className='flex flex-col justify-start w-full rounded-lg md:p-6 mb-3'>
        <div className={`flex flex-col items-center justify-center gap-2 ${removeUserInfo}`}>
          <ProfilePic src={userPP} alt="Avatar" addClass='h-10 w-10' />
          <h2 className="text-2xl text-black dark:text-white">{username}</h2>
        </div>
        <div className={`text-neutral-600 dark:text-neutral-400 p-4 mb-3 ${promptDetailPadding}`}>
          <h3>Searched for prompt: <span className='font-medium text-black dark:text-white'>{post.prompt.title}</span></h3>
          <div className={`text-neutral-600 dark:text-neutral-400 p-4 ${removeDatePadding}`}>
            <TimestampConverter timestamp={post.prompt.created_at} />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 justify-evenly place-items-center shrink-0 gap-6'>
          {post.contents.map((item: any, index: any) => (
            <Card title={item.title} description={item.description} image={item.image} url={item.link} key={index} />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Post;
