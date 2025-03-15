import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Info } from '@/app/data/siteInfo';

interface Props {
  info: Info;
}

const Hero: React.FC<Props> = ({ info }) => {
  const { mainImage, welcomeMessage, welcomeDescription } = info;

  return (
    <section id="hero" className="relative w-full h-screen flex items-center max-w-full">
      {/* Background Image Container with Filter */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center inset-0 z-0"
        style={{
          backgroundImage: `url(${mainImage})`,
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
              {welcomeMessage}
            </h1>
        </div>
        <div className="w-full mb-8">
          <p className="text-lg text-white/90 leading-relaxed max-w-xl">
            {welcomeDescription}
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

      {/* Scroll Indicator */}
      <div className="absolute w-full bottom-6 flex justify-center items-center transform -translate-x-1/2 z-50 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero