'use client'
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import CollapseHere from './components/CollapseHere'
import Cardy from './components/Cardy';
import Footer from './components/Footer';
//import Link from 'next/link';
//import NavbarDark from './components/NavbarDark';
import CarouselHere from './components/CarouselHere';
import CardCarousel from './components/CardCarousel';



export default function Home() {

  
  return (
    <>
      
      <Hero />
      <FAQ />
      <CollapseHere />
      <CarouselHere />
      <div className="flex flex-col items-center px-20 md:flex-row md:justify-center md:space-x-5 space-y-5">
          <Cardy /><Cardy /><Cardy />
      </div>
      
      <CardCarousel />
    </>
  )
}