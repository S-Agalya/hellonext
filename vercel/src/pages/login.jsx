import React from 'react'
import { useSession, signIn, signOut } from 'next-auth/react'

const Login = () => {
    const session = useSession()

    if (session) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <p className='text-2xl font-semibold mb-4'>Welcome, {session.user.name}</p>
                <button 
                    onClick={() => signOut()} 
                    className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300'
                >
                    Sign out
                </button>
            </div>
        )
    } else {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <p className='text-2xl font-semibold mb-4 text-center'>You are not signed in.</p>
                <button 
                    onClick={() => signIn()} 
                    className='px-6 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 '
                >
                    Sign in
                </button>
            </div>
        )
    }
}

export default Login
