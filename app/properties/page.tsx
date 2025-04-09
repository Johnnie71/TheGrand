'use client'
import React, { useEffect, useState } from 'react';
import { properties, Property } from '../data/properties';
import AnimatedSection from '../components/animatedSection/AnimatedSection';
import { MapPin, Search } from 'lucide-react';



const Properties = () => {
  const [displayedProperties, setDisplayedProperties] = useState<Property[]>(properties);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cityFilter, setCityFilter] = useState<string>('');

  const cities = [...new Set(properties.map(property => property.city))];

  const handleReset = () => {
    setSearchTerm('')
    setCityFilter('')
  }

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

      {/* Filter Section */}
      <section className='py-8 bg-white border-b border-gray-100'>
        <div className='container-custom'>
          <AnimatedSection
            animation='fade-in'
            delay={300}
          >
            <div className='flex flex-wrap items-center gap-4'>
              <div className='relative flex-grow max-w-md'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <Search className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  type='text'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder='Search Properties...'
                  className='pl-10 w-full px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus: ring-gold-dark transition-all'
                />
              </div>

              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                  <MapPin className='w-5 h-5 text-gray-400' />
                </div>
                <select
                  value={cityFilter}
                  onChange={(e) => setCityFilter(e.target.value)}
                  className="pl-10 px-4 py-2 border border-gray-200 rounded-sm focus:outline-none focus:ring-1 focus:ring-gold-dark transition-all appearance-none pr-10"
                >
                  <option value="">All Cities</option>
                  {cities.map(city => (
                    <option key={city} value={city}>{city}</option>
                  ))}
                </select>
              </div>

              <button
                className='px-4 py-2 text-sm text-luxury-gray hover:text-gold-dark transition-colors'
                onClick={handleReset}
              >
                Reset Filters
              </button>

            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}

export default Properties