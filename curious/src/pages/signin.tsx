import PageHead from '@/components/head';
import Header from '@/components/header';
import Input from '@/components/input';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useRouter } from 'next/router';

const Auth = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const router = useRouter();

    const loginForAccessToken = async (username: string, password: string) => {
        const response = await fetch('https://api.verycurious.xyz/token', {
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
        setError(false);
        try {
            await loginForAccessToken(username, password);
            router.push('/search');
        } catch (error) {
            console.error(error);
            setError(true);
        }
    }, [username, password, router]);


    return (
        <>
            <PageHead />
            <Header />
            <div className='flex justify-center'>
                <div className='bg-transparent px-8 md:px-16 py-16 self-center mt-2 lg:w-2/5 md:w-3/5 lg:max-w-2/5 w-full'>
                    <h2 className='text-black text-4xl mb-8 font-semibold'>
                        Sign in
                    </h2>
                    <div className='flex flex-col gap-4'>
                        <Input label="Email or Username" onChange={(e: any) => setUsername(e.target.value)} id="email" type="email" value={username} />
                        <Input label="Password" onChange={(e: any) => setPassword(e.target.value)} id="password" type="password" value={password} />
                    </div>
                    <button onClick={login} className='bg-black py-3 text-white rounded-md w-full mt-10 hover:bg-dark hover:opacity-90 transition'>Login</button>
                    {error && <p className='text-red-500 mt-4'>Invalid credentials</p>}
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
