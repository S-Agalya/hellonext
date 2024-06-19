import React from 'react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
const welcome = () => {
    const {data:session}=useSession()
    const router=useRouter()
    function handlesignin(){
        router.push('/')
    }
    if (session) {
        return (
            <>
                <div className='flex flex-col items-center justify-center min-h-screen '>
                    <p className='pr-5 mb-4 text-xl text-gray-800'>Welcome, {session.user.name}</p>
                    <button onClick={() => signOut()} className="btn btn-primary px-6 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-700">Sign out</button>
                </div>
            </>
        );
    }else{
        return(
            <>
            <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1>you are not signed in.</h1>
            <button onClick={handlesignin}>Go back to signin</button>
            </div>
            </>
        )
    }
}

export default welcome
