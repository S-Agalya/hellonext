import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/router'
import React from 'react'


const submit_page = () => {
    const searchparams=useSearchParams()
  const router=useRouter()
    const name=searchparams.get( 'name')
    const email=searchparams.get('email')
    const message=searchparams.get('message')
    function handlebackclick(){
      router.push('/')
    }
  return (
    <>
    <h1 className='text-center pt-8 font-bold textsize-10'>FORM SUBMITTED SUCCESSFULLY</h1>
    <div className='max-w-md mx-auto my-8 pt-8   shadow-md rounded-lg'>
        <p className='mb-4' style={{color:'black'}}><strong>Name: </strong>{name}</p>
        <p className='mb-4' style={{color:'black'}}><strong>Email: </strong>{email}</p>
        <p className='mb-4' style={{color:'black'}}><strong>Message: </strong>{message}</p>
    </div>
    <div className=' flex items-center justify-center '>
    <button type='submit' onClick={handlebackclick} className="px-4 py-2 bg-blue-500 text-white  rounded">BACK!!</button>
    </div>
    </>
  )
}

export default submit_page
