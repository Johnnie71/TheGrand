'use client'
import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Info } from '@/app/data/siteInfo';
import AnimatedSection from '../animatedSection/AnimatedSection';
import Image from 'next/image';

interface Props {
  info: Info;
}

const Hero: React.FC<Props> = ({ info }) => {
  const { mainImage, welcomeMessage, welcomeDescription } = info;

  return (
    <section id="hero" className="relative min-h-screen flex items-center py-20 overflow-hidden">
      {/* Background Image Container with Filter */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
        <Image
          alt='Hero Image'
          layout="fill"
          objectFit='cover'
          objectPosition='center'
          src={mainImage}
          className="absolute inset-0 z-0"
        />
      </div>

      {/* Content (Text) */}
      <div className="container-custom relative z-20 mt-16">
        <div className='w-full md:max-w-3xl flex flex-col md:justify-start md:items-start justify-center items-center gap-4 md:gap-10'>
          <AnimatedSection
            animation="fade-in"
            delay={300}
          >
            <span className="inline-block py-1 px-3 rounded-sm bg-gold-dark text-white text-xs uppercase tracking-wider font-medium">
              Luxury Living Redefined
            </span>
          </AnimatedSection>

          <AnimatedSection
            animation="fade-in"
            delay={500}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 md:mb-10 text-center md:text-left">
              {welcomeMessage}
            </h1>
          </AnimatedSection>
        </div>
        <AnimatedSection
          animation="fade-in"
          delay={700}
          className="mb-8"
        >
          <p className="text-lg text-white/90 leading-relaxed w-full md:max-w-xl text-center md:text-left">
            {welcomeDescription}
          </p>
        </AnimatedSection>
        <AnimatedSection
            animation="fade-in"
            delay={900}
            className="w-full flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-2"
          >
            <Link 
              href="/properties" 
              className="btn-gold shadow-lg flex items-center gap-2 group"
            >
              Explore Properties
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link 
              href="#" 
              className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-black"
            >
              Schedule a Tour
          </Link>
          </AnimatedSection>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute w-full bottom-3 md:bottom-6 flex justify-center items-center transform -translate-x-1/2 z-50 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[bounce_1.5s_infinite]"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero