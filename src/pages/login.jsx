import React from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
const Login = () => {
    const {data:session}=useSession();
    
  if(session){
    return (
      <>
        <div className='flex flex-col items-center justify-center min-h-screen ' >
        <p className='pr-5 mb-4'>welcome, {session.user.name}</p>
          <button  onClick={()=>signOut()} className="btn btn-primary ">sign out</button>
        </div>
        </>
      );
  }
  else{
    return(
      <>
    <div className='flex flex-col items-center justify-center min-h-screen ' >
    <p className='pr-5 mb-4' >you are not signed in</p>
          <button onClick={() => signIn()} className="btn btn-primary ">sign in</button>
        </div>
        </>
    );
  }
  

};

export default Login
