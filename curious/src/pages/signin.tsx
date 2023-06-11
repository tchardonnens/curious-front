import PageHead from '@/components/head';
import Header from '@/components/header';
import Input from '@/components/input';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const router = useRouter();

    const toasterLogin = () => {
        toast.promise(
            login(),
            {
                loading: 'Logging in... ⏳',
                success: <b>Have fun! 🥳</b>,
                error: <b>Hmmm... Check your credentials 🤔</b>,
            }
        );
    }

    const loginForAccessToken = async (username: string, password: string) => {
        const response = await fetch(`${API_BASE_URL}/token`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `grant_type=&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}&scope=&client_id=&client_secret=`
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        const token = data.access_token;

        // save the token to localStorage
        localStorage.setItem('authToken', token);
    };

    const login = useCallback(async () => {
        try {
            await loginForAccessToken(username, password);
            router.push('/search');
        } catch (error) {
            console.error(error);
            throw error;
        }
    }, [username, password, router]);


    return (
        <>
            <Toaster />
            <PageHead />
            <Header />
            <div id="signIn" className='flex justify-center'>
                <div className='bg-transparent px-8 md:px-16 py-16 self-center mt-2 lg:w-2/5 md:w-3/5 lg:max-w-2/5 w-full'>
                    <h2 className='text-black text-4xl mb-8 font-semibold'>
                        Sign in
                    </h2>
                    <div className='flex flex-col gap-4'>
                        <Input label="Email or Username" onChange={(e: any) => setUsername(e.target.value)} id="email" type="email" value={username} />
                        <Input label="Password" onChange={(e: any) => setPassword(e.target.value)} id="password" type="password" value={password} />
                    </div>
                    <button onClick={toasterLogin} className='bg-black py-3 text-white rounded-md w-full mt-10 hover:bg-dark hover:opacity-90 transition'>Login</button>
                    <button className='bg-white py-2.5 text-black rounded-md w-full mt-4 hover:bg-lightGrey transition flex flex-row items-center justify-center gap-4 border-2'>
                        <FcGoogle size={25} />
                        Continue with Google
                    </button>
                    <p className='text-zinc-500 mt-10'>
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
