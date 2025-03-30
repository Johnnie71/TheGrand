'use client'
import React from 'react'
import AnimatedSection from '../animatedSection/AnimatedSection'
import { Home, Award, Users, Clock, LucideIcon } from 'lucide-react';

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

const WhyUsSection = () => {

  const benefits: Benefit[] = [
   {
    icon: Home,
    title: 'Premium Locations',
    description: 'Our properties are situated in the most prestigious and sought-after neighborhoods.'
   },
   {
    icon: Award,
    title: 'Exceptional Quality',
    description: 'We use only the finest materials and work with renowned architects and designers.'
   },
   {
    icon: Users,
    title: 'Dedicated Service',
    description: 'Oour professional staff is committed to providing personalized.'
   },
   {
    icon: Clock,
    title: 'Timeless Design',
    description: 'Our properties feature elegant designs that transcend trends and maintain value.'
   }
  ]

  return (
    <section id='whyUs' className='py-20 bg-white'>
      <div className='container-custom'>
        <AnimatedSection className='text-center mb-16 max-w-3xl mx-auto'
        >
          <span className='inline-block py-1 px-3 rounded-sm bg-luxury-cream text-luxury-black text-xs uppercase tracking-wider font-medium mb-4'>
            why choose us
          </span>
          <h2 className='text-3xl md:text-4xl font-bold mb-4'>
            Exceptional Features & Benefits
          </h2>
          <p className='text-lg text-luxury-black leading-relaxed'>
            Discover what sets The Brand apart and why our residents choose to call our properties home.
          </p>
        </AnimatedSection>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          {benefits.map((benefit, idx) => {
            const { icon: Icon, title, description } = benefit;
            return (
              <AnimatedSection
                key={idx}
                animation='fade-in'
                delay={300 + (idx * 150)}
                className='p-6 rounded-sm border border-gray-100 hover:border-gold-light hover:shadow-lg transition-all'
              >
                <div className='mb-4'>
                  <Icon className='w-8 h-8 text-gold-dark'/>
                </div>
                <h3 className='text-xl font-serif fondt-bold mb-3'>{title}</h3>
                <p className='text-luxury-gray text-sm'>{description}</p>
              </AnimatedSection>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyUsSection