'use client'
import React from 'react'
import AnimatedSection from '../animatedSection/AnimatedSection'
import Link from 'next/link'
import Image from 'next/image'

const AboutSection = () => {
  return (
    <section className='py-20 bg-luxury-cream'>
      <div className='container-custom'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
          <AnimatedSection
            animation='fade-in-left'
            className='order-2 lg:order-1'
          >
            <span className='inline-block py-1 px-3 rounded-sm bg-gold-light/20 text-gold-dark text-sm uppercase tracking-wider font-medium mb-4'>
              About The Brand
            </span>
            <h2 className='text-3xl md:text-4xl font-bold mb-6'>
              Setting the standard for Luxury Living
            </h2>
            <p className='text-luxury-gray mb-6 leading-relaxed'>
              At The Brand, we believe that exceptional living is defined by attention to detail, quality craftsmanship, and uncompromising service. Our properties are meticulously designed to create spaces where elegance meets functionality, and luxury becomes a lifestyle.
            </p>
            <p className='text-luxury-gray mb-8 leading-relaxed'>
              With a portfolio of distinctive residential buildings in the most sought-after locations, we offer more than just a home – we provide an elevated living experience that reflects your aspirations and complements your lifestyle.
            </p>
            <Link
              // href='/about'
              href='#'
              className='inline-flex items-center gap-2 text-luxury-black hover:text-gold-dark transition-colors font-medium group'
            >
              Learn more about us
            </Link>

          </AnimatedSection>

          <AnimatedSection
            animation='fade-in-right'
            className='order-1 lg:order-2'
          >
            <div className="relative">
              <Image
                layout="fill"
                objectFit='cover'
                objectPosition='center'
                src="https://images.unsplash.com/photo-1600585154363-67eb9e2e2099?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="Luxury Interior" 
                className="h-auto rounded-sm shadow-xl"
              />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-sm shadow-lg w-40 lg:w-48 hidden md:block">
                  <p className="text-gold-dark font-bold text-3xl lg:text-4xl mb-1">15+</p>
                  <p className="text-luxury-gray text-sm">Years of Excellence</p>
                </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

    </section>
  )
}

export default AboutSection