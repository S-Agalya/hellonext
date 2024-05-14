import { useSearchParams } from 'next/navigation'
import React from 'react'

const submit_page = () => {
    const searchparams=useSearchParams()

    const name=searchparams.get( 'name')
    const email=searchparams.get('email')
    const message=searchparams.get('message')
  return (
    <>
    <div className='max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-lg'>
        <p className='mb-4' style={{color:'black'}}><strong>Name:</strong>{name}</p>
        <p className='mb-4' style={{color:'black'}}><strong>Email:</strong>{email}</p>
        <p className='mb-4' style={{color:'black'}}><strong>Message:</strong>{message}</p>
    </div>
    
    
    </>
  )
}

export default submit_page
