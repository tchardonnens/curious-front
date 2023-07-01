import Head from 'next/head';
import { useRouter } from 'next/router';

function PageHead() {
  const router = useRouter();
  let title = '';
  let description = '';

  if (router.pathname === '/') {
    title = 'Curious';
    description = "Welcome to Curious, the knowledge portal powered by ChatGPT";

  } else if (router.pathname === '/signin') {
    title = 'Sign In';
    description = "Sign in to Curious to access our knowledge portal powered by ChatGPT";

  } else if (router.pathname === '/signup') {
    title = 'Sign Up';
    description = "Sign up to Curious to access our knowledge portal powered by ChatGPT";

  } else if (router.pathname === '/search') {
    title = 'Search';
    description = "Unleash your curiosity with Curious Search and explore YouTube, Twitter, and Reddit like never before!";

  } else if (router.pathname === '/feed') {
    title = 'Feed';
    description = "Feed your curiosity on Curious! Follow your friends and explore what they've searched for, expanding your knowledge horizons.";

  } else if (router.pathname === '/profile') {
    title = 'Profile';
    description = "Share your curiosity with the world. Unveil your interests, showcase your searches, and describe yourself within a vibrant community of knowledge enthusiasts.";
  }


  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="mask-icon" href="/icons/mask-icon.svg" color="#FFFFFF" />
      <meta name="theme-color" content="#ffffff" />
      <meta name="twitter:url" content="https://verycurious.xyz" />
      <meta name="twitter:title" content="Curious" />
      <meta name="twitter:description" content="Knowledge portal teaching to your pace" />
      <meta name="twitter:image" content="/sf-dream.png" />
      <meta name="twitter:creator" content="@borab0302 & @thomas_chardo" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Curious" />
      <meta property="og:site_name" content="Curious" />
      <meta property="og:description" content="Knowledge portal teaching to your pace" />
      <meta property="og:image" content="/sf-dream.png" />
      <meta property="og:url" content="https://verycurious.xyz" />
    </Head>
  );
}

export default PageHead;
