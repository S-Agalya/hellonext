import Image from "next/image"
const index = () => {
  return (
    <>
    
    
    <div 
    style={{ display: 'flex', flexDirection:"column",justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
        <h1 className="font-bold text-size:20" >HELLO </h1><br/>
        <Image
          className="relative "
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
        />
      </div>
      <div  style={{ position: 'absolute', top: '70px',left:"20px"}}>
      <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert"
              width={100}
              height={24}
              priority
            />
            
      </div>
      <h1 style={{ position: 'absolute', top: '70px', left: '50%', transform: 'translateX(-50%)' ,fontSize: '2rem' }} className="font-bold ">WELCOME TO NEXT.JS</h1>

    </>
  )
}

export default index