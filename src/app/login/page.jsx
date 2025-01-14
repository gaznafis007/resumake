import Button from '@/components/Button/Button';
import DefaultButton from '@/components/DefaultButton/DefaultButton';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Login = () => {
    return (
        <div className='p-8 md:p-16 flex flex-col space-y-4'>
            <Link href={'/'} className='text-4xl text-purple-800 font-semibold hover:bg-white p-4 hover:rounded-md w-full md:w-1/6'>Resumake</Link>
            <div className="flex flex-col md:flex-row space-x-4">
                <div className="w-full md:w-1/2 rounded-xl">
                    <Image alt='login-image' src={'https://images.pexels.com/photos/2451622/pexels-photo-2451622.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'} className='w-full rounded-xl' width={1080} height={720}/>
                </div>
                <div className="w-full md:w-1/2 space-y-8 p-8">
                    <h2 className="text-3xl font-thin text-purple-800 text-center -mt-8">Login</h2>
                    <form className='flex flex-col space-y-4 '>
                        <div className="flex flex-col space-y-2">
                            <label className="text-purple-800 text-sm">Email</label>
                            <input type="email" name="email" className="border border-purple-800 rounded-md px-4 py-2 text-purple-800 bg-purple-200" placeholder='Enter your email' />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label className="text-purple-800 text-sm">Password</label>
                            <input type="password" name="password" className="border border-purple-800 rounded-md px-4 py-2 text-purple-800 bg-purple-200" placeholder='Create your password' />
                        </div>
                        <Link href={'/register'} className="text-sm hover:underline text-purple-800 capitalize">create account?</Link>
                        <DefaultButton btnType={'type'}>Login</DefaultButton>
                    </form>
                    <Button style={'px-4 py-2 bg-white text-black rounded-md block border border-slate-300 block w-full font-semibold'}>Login with <span className='text-blue-500'>Google</span></Button>
                </div>
            </div>
        </div>
    );
};

export default Login;