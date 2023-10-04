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
//import { Divider } from 'react-daisyui';
import Divider from './components/Divider';


export default function Home() {

  
  return (
    <>
      
      <Hero />
      <SectionOne />
      <Divider />
      <CardList />
      <Divider/>
      <SectionHalf />
      <Divider />
      <FeatureSection />
      <Divider />
      <FAQ />
      <Divider />
      <CarouselHere />
      
      
      
    </>
  )
}