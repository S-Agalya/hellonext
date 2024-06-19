import React from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';


const Login = () => {
    const { data: session } = useSession();
    
    if (session) {
        return (
            <>
                <div className='flex flex-col items-center justify-center min-h-screen '>
                    <p className='pr-5 mb-4 text-xl text-gray-800'>Welcome, {session.user.name}</p>
                    <button onClick={() => signOut()} className="btn btn-primary px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700">Sign out</button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='flex flex-col items-center justify-center min-h-screen '>
                    <div className='bg-gray-100 p-6 rounded-lg shadow-md bg-gray-100 w-80'>
                        <label className='block mb-2'>
                            <span className='text-gray-700'>Username</span>
                            <input type="text" placeholder="Username" className='mt-1 block w-full px-3 py-2 bg-white border  rounded-md shadow-sm '/>
                        </label>
                        <label className='block mb-4'>
                            <span className='text-gray-700'>Password</span>
                            <input type="password" placeholder="Password" className='mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm '/>
                        </label>
                        <button className='btn btn-primary w-full px-6 py-2 rounded-full bg-blue-500 text-white' onClick={()=>signIn()}>Sign in</button>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center min-h-screen '>
                    <p className='pr-5 mb-4 text-xl text-gray-800'>You are not signed in</p>
                    <button onClick={() => signIn()} className="btn btn-primary px-6 py-2 rounded-full bg-blue-500 text-white ">Sign in</button>
                </div>
            </>
        );
    }
};

export default Login;
