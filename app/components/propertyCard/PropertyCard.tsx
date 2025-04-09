import React from 'react';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import { Property } from '@/app/data/properties';
import Image from 'next/image';

interface Props {
  property: Property;
}

const PropertyCard: React.FC<Props> = ({ property }) => {
  const { name, mainImage, city, shortDescription, slug } = property;

  return (
    <div className="luxury-card group h-full flex flex-col">
      {/* Image Container */}
      <div className="relative overflow-hidden aspect-[3/2]">
        <Image
          src={mainImage}
          alt={name}
          className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <div className="flex items-center space-x-1 text-white">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">{city}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-serif font-bold mb-2 text-luxury-black">
          {name}
        </h3>
        <p className="text-sm text-luxury-gray mb-4 flex-grow">
          {shortDescription}
        </p>
        <Link
          // href={`/properties/${slug}`}
          href="#"
          className="inline-flex items-center text-sm font-medium text-gold-dark hover:text-gold group-hover:underline"
        >
          View Details
          <ArrowRight className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default PropertyCard