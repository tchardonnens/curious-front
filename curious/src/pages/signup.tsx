import PageHead from '@/components/head';
import Header from '@/components/header';
import Input from '@/components/input';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Auth = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [full_name, setName] = useState('');
    const [password, setPassword] = useState('');

    const toasterRegister = () => {
        toast.promise(
            register(),
            {
                loading: 'Creating user... ⏳',
                success: <b>Account created! 🥳</b>,
                error: <b>Could not create your account 🤔</b>,
            }
        );
    }

    const register = async () => {
        try {
            const response = await fetch('https://api.verycurious.xyz/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ full_name, email, password, username })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            router.push('/signin');
        } catch (error) {
            console.error('An error occurred while registering:', error);
            throw error;
        }
    };

    return (
        <>
            <Toaster />
            <PageHead />
            <Header />
            <div className='flex justify-center'>
                <div className='bg-transparent px-8 sm:px-16 py-16 self-center mt-2 lg:w-2/5 md:w-3/5 lg:max-w-2/5 w-full'>
                    <h2 className='text-black text-4xl mb-8 font-semibold'>
                        Sign up
                    </h2>
                    <div className='flex flex-col gap-4'>
                        <Input label="Full name" onChange={(e: any) => setName(e.target.value)} id="name" value={full_name} />
                        <Input label="Username" onChange={(e: any) => setUsername(e.target.value)} id="username" value={username} />
                        <Input label="Email" onChange={(e: any) => setEmail(e.target.value)} id="email" type="email" value={email} />
                        <Input label="Password" onChange={(e: any) => setPassword(e.target.value)} id="password" type="password" value={password} />
                    </div>
                    <button onClick={toasterRegister} className='bg-black py-3 text-white rounded-md w-full mt-10 hover:bg-dark hover:opacity-90 transition'>Register</button>
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
