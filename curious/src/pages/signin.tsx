import Header from '@/components/header';
import Input from '@/components/input';
import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
          <Head>
            <title>Curious</title>
            <meta name="description" content="Knowledge portal powered with ChatGPT" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:title" content="Curious" />
            <meta property="og:description" content="Knowledge portal powered with ChatGPT" />
            <meta property="og:image" content="/sf-dream.png" />
            <meta property="og:url" content="https://verycurious.xyz" />
          </Head>
          <Header />
          <div className='flex justify-center'>
            <div className='bg-transparent px-16 py-16 self-center mt-2 lg:w-2/5 md:w-3/5 lg:max-w-2/5 w-full'>
                <h2 className='text-black text-4xl mb-8 font-semibold'>
                    Sign in
                </h2>
                <div className='flex flex-col gap-4'>
                    <Input label="Username" onChange={(ev: any) => setName(ev.target.value)} id="name" value={name}/>
                    <Input label="Email" onChange={(ev: any) => setEmail(ev.target.value)} id="email" type="email" value={email}/>
                    <Input label="Password" onChange={(ev: any) => setPassword(ev.target.value)} id="password" type="password" value={password}/>
                </div>
                <button className='bg-black py-3 text-white rounded-md w-full mt-10 hover:bg-dark transition'>Login</button>
                <p className='text-zinc-500 mt-12'>
                    First time here?
                    <Link href="/signup" className='text-black ml-1 hover:underline cursor-pointer'>
                        Sign up
                    </Link>
                </p>
            </div>
          </div>
        </>
    );
}
export default Auth;