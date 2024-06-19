import React, { useState } from 'react';
import { useSession, signIn, signOut } from 'next-auth/react';

import { useRouter } from 'next/router';
const Login = () => {
    const { data: session } = useSession();
    const router=useRouter()
    const [name,setName]=useState('')
    const [password, setPassword]=useState('')
   function handlelogin(){
      router.push('/welcome')
   }
    if (session) {
        return (
            <>
                <div className='flex flex-col items-center justify-center min-h-screen '>
                    <p className='pr-5 mb-4 text-xl text-white-800'>Welcome, {session.user.name}</p>
                    <button onClick={() => signOut()} className="btn btn-primary px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700">Sign out</button>
                </div>
            </>
        );
    } else {
        return (
            <>
                <div className='flex flex-col items-center justify-center  border-200 '>
                    <div className='bg-gray-200 p-6 rounded-lg shadow-md bg-gray-100 w-80'>

                        <label className='block mb-2'>
                            <span className='text-gray-700'>Username</span>
                            <input type='text'
                            value={name}
                            onChange={(e)=>setName(e.target.value)}
                            className='w-full px-3 py-2 border rounded-full'
                            placeholder='username'
                            required/>
                        </label>

                        <label className='block mb-4'>
                            <span className='text-gray-700'>Password</span>
                            <input type='text'
                            value={password}
                            onChange={(e)=>setPassword(e.target.value)}
                            className='w-full px-3 py-2 border rounded-full'
                            placeholder='password'
                            required/>
                        </label>

                        <div className='ml-10 pl-11'>
                        <button onClick={handlelogin} className='btn btn-primary rounded-full items-center justify-center bg-blue-500 hover:bg-blue-700 text-white pl-7 pr-7'>Login</button>
                        </div>

                        <div className='flex flex-col items-center justify-center   '>
                    <p className='pr-5 mb-5 text-xl text-gray-800'> or </p>
                    <button onClick={() => signIn()} className="btn btn-primary  px-6 py-2 rounded-full bg-blue-500 text-white pl-6"> Sign in </button>
                </div>
                        
                    </div>
                </div>

                
            </>
        );
    }
};

export default Login;
