
import Image from "next/image"
const index = () => {
  return (
    <>
     <div style ={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert "
              width={100}
              height={24}
              priority
            /><br></br>
            <h1 className="text-center"> HELLO NEXT.JS</h1>
    </div>
    


     </>
  )
}

export default index

