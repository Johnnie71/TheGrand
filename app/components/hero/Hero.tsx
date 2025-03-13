import React from 'react';
import Link from 'next/link';

interface Props {
  image: string;
}

const Hero: React.FC<Props> = ({ image }) => {

  const scrollToSection = (sectionID: string) => {
    const element = document.querySelector(sectionID);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="hero" className="relative w-full h-screen flex items-center max-w-full">
      {/* Background Image Container with Filter */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
          filter: 'brightness(50%)', // Apply the filter only to the background
        }}
      ></div>

      {/* Content (Text) */}
      <div className="relative text-white md:text-left md:pl-20 md:w-6/12 flex flex-col gap-6 text-center">
        <div className='w-full'>
          <h1 className="text-5xl md:text-7xl font-bold">Luxury Living,</h1>
          <h1 className="text-5xl md:text-7xl font-bold">Elevated</h1>
        </div>
        <div className="w-full px-4 !sm:px-4 md:px-0">
          <p className="text-xl sm:text-2xl">
            Experience unparalleled sophistication in our premium residential properties
          </p>
        </div>
        <div className='sm:w-full md:w-fit flex justify-center'>
          <Link href="/properties">
            <button className='bg-white px-2 py-4 text-black w-fit font-semibold border-2 border-black'>Explore our buildings</button>
          </Link>
        </div>
      </div>

      {/* Arrow */}
      <div className='absolute w-full bottom-0 flex justify-center items-center transform -translate-x-1/2 z-50 animate-bounce'>
        <svg xmlns="http://www.w3.org/2000/svg" width="50px" height="50px" viewBox="0 0 24 24" className="stroke-white -rotate-90">
          <path strokeLinejoin="round" stroke-linecap="round" stroke-width="1.5" d="M11 6L5 12M5 12L11 18M5 12H19"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero