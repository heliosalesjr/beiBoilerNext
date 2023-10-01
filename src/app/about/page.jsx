import React from 'react'
import Link from 'next/link';

function About() {
  return (
    <>
        <h2 className='text-5xl font-extrabold'>Tudo sobre mean</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore iure, obcaecati suscipit placeat delectus corrupti officiis eius harum dicta ut est minima quisquam nisi cumque. Voluptas nihil qui nobis corrupti.</p>
        <Link href="/">
            <button className='btn btn-alert '>That's all</button>
        </Link>
        
    </>
  )
}

export default About