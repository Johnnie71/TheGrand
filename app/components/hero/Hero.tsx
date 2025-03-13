import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  image: string;
}

const Hero: React.FC<Props> = ({ image }) => {

  return (
    <section id="hero" className="relative w-full h-screen flex items-center max-w-full">
      {/* Background Image Container with Filter */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center inset-0 z-0"
        style={{
          backgroundImage: `url(${image})`,
          filter: 'brightness(50%)', // Apply the filter only to the background
        }}
      ></div>

      {/* Content (Text) */}
      <div className="relative text-white md:text-left md:pl-20 md:w-6/12 flex flex-col text-center">
        <div className='w-full'>
          <span className="inline-block py-1 px-3 rounded-sm bg-gold-dark text-white text-xs uppercase tracking-wider font-medium mb-4">
              Luxury Living Redefined
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Experience Unparalleled Elegance in Every Detail
            </h1>
        </div>
        <div className="w-full mb-8">
          <p className="text-lg text-white/90 leading-relaxed max-w-xl">
            The Grand offers exceptional residential properties that blend luxury, comfort, and sophisticated design.
          </p>
        </div>
        <div className='w-full flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-2'>
          <Link 
              href="/properties" 
              className="btn-gold shadow-lg flex items-center gap-2 group"
            >
              Explore Properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link 
              href="/contact" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-black"
            >
              Schedule a Tour
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