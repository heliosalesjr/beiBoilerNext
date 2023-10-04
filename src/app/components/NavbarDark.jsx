'use client'
import Image from 'next/image';
import React from 'react'
import useReadingProgress from '../hooks/useReadingProgress'
import './custom.css'


function NavbarDark() {
  const completion = useReadingProgress();
  const handleClick = () => {
    console.log('Link clicked');
  };
  return (
    <div className="navbar bg-base-100 bg-white-500 sticky top-0 z-50">
      <div className="flex-1">
        <Image
          src="/images/logo-blue.png" // Caminho relativo à pasta 'public'
          alt="Logo BEĨ"
          width={70} // Largura desejada
          height={70}
        />
      </div>
     
      <div className="flex-none gap-2">
        <div className="form-control">
          <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
        </div>
        
      </div>
      <span
        style={{ transform: `translateX(${completion - 100}%)` }}
        className="absolute bg-customBlue h-1 w-full bottom-0"
      />
    </div>
    
  )
}

export default NavbarDark