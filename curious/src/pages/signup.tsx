import PageHead from '@/components/head';
import Header from '@/components/header';
import Input from '@/components/input';
import Link from 'next/link';
import { useState } from 'react';

import { FcGoogle } from 'react-icons/fc';

const Auth = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
          <PageHead />
          <Header />
          <div className='flex justify-center'>
            <div className='bg-transparent px-8 sm:px-16 py-16 self-center mt-2 lg:w-2/5 md:w-3/5 lg:max-w-2/5 w-full'>
                <h2 className='text-black text-4xl mb-8 font-semibold'>
                    Sign up
                </h2>
                <div className='flex flex-col gap-4'>
                    <Input label="Username" onChange={(e: any) => setName(e.target.value)} id="name" value={name}/>
                    <Input label="Email" onChange={(e: any) => setEmail(e.target.value)} id="email" type="email" value={email}/>
                    <Input label="Password" onChange={(e: any) => setPassword(e.target.value)} id="password" type="password" value={password}/>
                </div>
                <button className='bg-black py-3 text-white rounded-md w-full mt-10 hover:bg-dark hover:opacity-90 transition'>Register</button>
                <button className='bg-white py-2.5 text-black rounded-md w-full mt-4 hover:bg-lightGrey transition flex flex-row items-center justify-center gap-4 border-2'>
                    <FcGoogle size={25} />
                    Continue with Google
                </button>
                <p className='text-zinc-500 mt-10'>
                    Already have an account?
                    <Link href="/signin" className='text-black ml-1 hover:underline cursor-pointer'>
                        Sign in
                    </Link>
                </p>
            </div>
          </div>
        </>
    );
}
export default Auth;
