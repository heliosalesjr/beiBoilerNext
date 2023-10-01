import Link from 'next/link';

export default function Home() {

  
  return (
    <div>
    
      <h1 className=' text-5xl text-center'>Home</h1>

      <Link href="/about">
        <button className='btn p-20 '>Clickaeah</button>
      </Link>
      
    
    </div>
  )
}
