'use client'
import React, {useState, useState } from 'react';
import { properties, Property } from '../data/properties';
import AnimatedSection from '../components/animatedSection/AnimatedSection';



const Properties = () => {
  return (
    <div className='pt-20 animate-fade-in'>
      {/* Hero section */}
      <section className='relative py-20 bg-luxury-black'>
        <div className='absolute inset-0 opacity-30'>
          <img 
              src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
              alt="Properties Hero" 
              className="w-full h-full object-cover object-center"
            />
        </div>
        <div className='container-custom relative z-10 text-center'>
          <AnimatedSection
            animation='fade-in'
            className='max-w-3xl mx-auto'
          >
            <span className='inline-block py-1 px-3 rounded-sm bg-gold-dark text-white text-sm uppercase tracking-wider font-medium'>
              Our Properties
            </span>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white'>
              Discover Your Perfect Residence
            </h1>
            <p className='text-lg text-white/80 leading-relaxed mb-6 max-w-2xl mx-auto'>
              Browse our collection of meticulously designed properties, each offering a unique lifestyle experience with uncompromising quality and attention to detail.
            </p>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Properties