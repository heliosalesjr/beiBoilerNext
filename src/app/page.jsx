'use client'
import Hero from './components/Hero';
import FAQ from './components/FAQ';
import CollapseHere from './components/CollapseHere'
import Cardy from './components/Cardy';
import Footer from './components/Footer';
//import Link from 'next/link';
//import NavbarDark from './components/NavbarDark';
import CarouselHere from './components/CarouselHere';
import CardList from './components/CardList';
import SectionOne from './components/SectionOne';
import './globals.css'
import SectionHalf from './components/SectionHalf';
import FeatureSection from './components/FeatureSection';


export default function Home() {

  
  return (
    <>
      
      <Hero />
      <SectionOne />
      <CardList />
      <SectionHalf />
      <FeatureSection />
      <FAQ />
      <CollapseHere />
      <CarouselHere />
      <div className="flex flex-col items-center px-20 md:flex-row md:justify-center md:space-x-5 space-y-5">
          <Cardy /><Cardy /><Cardy />
      </div>
      
      
    </>
  )
}