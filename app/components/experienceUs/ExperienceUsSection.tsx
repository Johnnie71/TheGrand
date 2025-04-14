'use client'
import React from 'react'
import AnimatedSection from '../animatedSection/AnimatedSection'
import Link from 'next/link'
import Image from 'next/image'

const ExperienceUsSection = () => {
  return (
    <section className='py-20 bg-luxury-black relative overflow-hidden'>
      <div className='absolute inset-0 opacity-20'>
        <Image
          layout="fill"
          objectFit='cover'
          objectPosition='center'
          src='https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
          alt='BackgroundImage'
          className='w-full h-full'
        />
      </div>
      <div className='custom-container relative z-10'>
        <AnimatedSection className='max-w-3xl mx-auto text-center'>
          <span className='inline-block py-1 px-3 bg-gold-dark/30 text-gold-light text-sm uppercase tracking-wider font-medium mb-4 rounded-sm'>
            Experience The Brand
          </span>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white'>
            Ready to Elevate Your Living Experience?
          </h2>
          <p className='text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto'>
            Contact us today to learn more about our properties or to schedule a private tour of any of our exceptional residences.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/properties"
                className="btn-gold shadow-lg"
              >
                Explore Properties
              </Link>
              <Link 
                // href="/contact" 
                href="#"
                className="btn-secondary border-white text-white hover:bg-white hover:text-luxury-black"
              >
                Contact Us
              </Link>
            </div>
        </AnimatedSection>
      </div>

    </section>
  )
}

export default ExperienceUsSection