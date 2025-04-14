'use client'
import React from 'react'
import Image from 'next/image'
import AnimatedSection from '../components/animatedSection/AnimatedSection'

// Company history timeline data
const timeline = [
  {
    year: 2005,
    title: 'Company Founded',
    description: 'The Grand was established with a vision to redefine luxury living.'
  },
  {
    year: 2008,
    title: 'First Development',
    description: 'Completed our first luxury residential tower in the heart of downtown.'
  },
  {
    year: 2012,
    title: 'Expansion',
    description: 'Expanded operations to three additional metropolitan areas.'
  },
  {
    year: 2015,
    title: 'Award Recognition',
    description: 'Received multiple design and architecture awards for our properties.'
  },
  {
    year: 2018,
    title: 'Sustainability Initiative',
    description: 'Launched our eco-friendly construction and building management program.'
  },
  {
    year: 2023,
    title: 'Global Presence',
    description: 'Established presence in international markets with signature properties.'
  }
];

// Team members data
const team = [
  {
    name: 'Alexandra Reynolds',
    position: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'With over 20 years in luxury real estate, Alexandra founded The Grand with a vision to create living spaces that blend artistry and functionality.'
  },
  {
    name: 'Michael Chen',
    position: 'Chief Architect',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Award-winning architect whose innovative designs have transformed urban landscapes across the globe.'
  },
  {
    name: 'Sophia Williams',
    position: 'Design Director',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'Sophia brings her extensive background in interior design to create spaces that exemplify modern luxury with timeless elegance.'
  },
  {
    name: 'James Rodriguez',
    position: 'Development Manager',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    bio: 'James oversees all development projects, ensuring they meet our exacting standards for quality and sustainability.'
  }
];

const About = () => {
  return (
    <div className='pt-20 pb-16'>
      {/* Hero Section */}
      <div className="relative h-[40vh] md:h-[50vh] w-full overflow-hidden bg-luxury-black">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80')] bg-cover bg-center opacity-50"></div>
        <div className="absolute inset-0 bg-luxury-black/50"></div>
        <div className="container-custom h-full flex flex-col justify-center items-center text-center relative z-10">
          <AnimatedSection animation="fade-in" className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif mb-4">About The Grand</h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Redefining luxury living through exceptional design, unparalleled service, and innovative spaces.
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Mission Section */}
      <section id='mission' className='py-16 bg-white'>
        <div className='container-custom'>
          <AnimatedSection
            animation='fade-in'
            className='max-w-4xl mx-auto text-center mb-16'
          >
            <h2 className="text-3xl md:text-4xl font-serif mb-6">Our Mission</h2>
            <p className="text-xl leading-relaxed text-gray-700">
              To create extraordinary living environments that inspire and elevate the human experience through thoughtful design, exceptional craftsmanship, and a commitment to sustainability and community.
            </p>
          </AnimatedSection>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto'>
            <AnimatedSection animation='fade-in-right' delay={200}>
              <div className='p-8 border border-gray-100 rounded-sm bg-luxury-cream/50 h-full'>
                <h3 className='text-2xl font-serif mb-4'>Our Vision</h3>
                <p className='className="text-gray-700 leading-relaxed"'>
                  To be the global leader in luxury residential development, recognized for creating iconic properties that seamlessly blend artistry, innovation, and functionality while setting new standards for sustainable luxury.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-in-right" delay={300}>
              <div className="p-8 border border-gray-100 rounded-sm bg-luxury-cream/50 h-full">
                <h3 className="text-2xl font-serif mb-4">Our Values</h3>
                <ul className="text-gray-700 space-y-3">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold-dark rounded-full mr-3 mt-2"></span>
                    <span>Excellence in every detail</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold-dark rounded-full mr-3 mt-2"></span>
                    <span>Innovation that enhances living</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold-dark rounded-full mr-3 mt-2"></span>
                    <span>Sustainability and environmental responsibility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold-dark rounded-full mr-3 mt-2"></span>
                    <span>Community and cultural engagement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-gold-dark rounded-full mr-3 mt-2"></span>
                    <span>Integrity in all our interactions</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About