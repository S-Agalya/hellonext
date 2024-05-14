import React, { useState } from 'react'
import { useRouter } from 'next/router'
const ContactForm = () => {
    const [name ,setname]=useState('')
    const [email,setemail]=useState('')
    const [message,setmessage]=useState('')
    const router=useRouter()
    const handlesubmit =(e)=>{
 e.preventDefault()
 router.push(`/submit_page?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}&message=${encodeURIComponent(message)}`);
    }
  return (
    <>
    
    <form onSubmit={handlesubmit} className="max-w-md mx-auto my-8 p-4 bg-white shadow-md rounded-lg" >
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setname(e.target.value)} 
          className="w-full px-3 py-2 border rounded" 
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input 
          type="email" 
          value={email} 
          onChange={(e) => setemail(e.target.value)} 
          className="w-full px-3 py-2 border rounded" 
          required 
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Message</label>
        <textarea 
          value={message} 
          onChange={(e) => setmessage(e.target.value)} 
          className="w-full px-3 py-2 border rounded" 
          required 
        />
      </div>
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form></>
  )
}

export default ContactForm
