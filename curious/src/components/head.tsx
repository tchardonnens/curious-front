import Head from 'next/head';
import { useRouter } from 'next/router';

function PageHead() {
  const router = useRouter();
  let title = '';
  let description = '';

  if (router.pathname === '/') {
    title = 'Curious';
    description = 'Welcome to Curious, the knowledge portal powered by ChatGPT';

  } else if (router.pathname === '/signin') {
    title = 'Sign In';
    description = 'Sign in to Curious to access our knowledge portal powered by ChatGPT';

  } else if (router.pathname === '/signup') {
    title = 'Sign Up';
    description = 'Sign up to Curious to access our knowledge portal powered by ChatGPT';

  } else if (router.pathname === '/search') {
    title = 'Search';
    description = '';
  
  } else if (router.pathname === '/feed') {
    title = 'Feed';
    description = '';
  
  } else if (router.pathname === '/profile') {
    title = 'Profile';
    description = '';
  }


  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content="/sf-dream.png" />
      <meta property="og:url" content="https://verycurious.xyz" />
    </Head>
  );
}

export default PageHead;
