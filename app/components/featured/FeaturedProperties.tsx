'use client'
import React from 'react'
import { Property } from '@/app/data/properties'
import PropertyCard from '../propertyCard/PropertyCard';
import AnimatedSection from '../animatedSection/AnimatedSection';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  featured?: Property[];
}

const FeaturedProperties: React.FC<Props> = ({ featured }) => {
  
  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-sm bg-luxury-cream text-luxury-black text-xs uppercase tracking-wider font-medium mb-4">
            Featured Properties
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Our Premier Residences
          </h2>
          <p className="text-lg text-luxury-gray leading-relaxed">
            Experience the epitome of luxury living with our carefully selected properties, each offering a unique blend of comfort, style, and excellence.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featured && featured.map((property, index) => (
            <AnimatedSection
              key={property.id}
              animation="fade-in"
              delay={300 + (index * 150)}
            >
              <PropertyCard property={property} />
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection className="text-center">
          <Link 
            href="/properties" 
            className="inline-flex items-center gap-2 text-luxury-black hover:text-gold-dark transition-colors font-medium group"
          >
            View All Properties
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  )
}

export default FeaturedProperties;