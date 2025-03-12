'use client'
import React from 'react';
import Link from 'next/link';

interface Property {
  id: number;
  name: string;
}

interface Social {
  name: string;
  link: string;
}

interface FooterData {
  properties: Property[];
  socials?: Social[];
}

interface Props {
  footerData: FooterData;
}

const Footer: React.FC<Props> = ({ footerData }) => {
  const { properties, socials } = footerData;

  return (
    <footer className='bg-[#111827] text-white py-8'>
      <div className='container mx-auto px-4 md:px-16 sm:px-10 '>
        <div className="pd-2 md:pb-10 flex flex-col md:flex-row justify-between items-start border-b-2 border-gray-700">
          {/*Grand Section */}
          <div className='mb-6 md:mb-0'>
            <h2 className='text-lg font-semibold mb-2'>The Grand</h2>
            <p className='space-y-2 max-w-xs leading-relaxed opacity-70'>
              Redifining luxury living through exceptional design and unparalled service
            </p>
          </div>

          {/*Properties */}
          <div className='mb-6 md:mb-0'>
            <h2 className='text-lg font-semibold mb-2'>Properties</h2>
            <ul className='space-y-2'>
            {properties && properties.map((property, idx) => {
              const { name, id } = property;

              return (
                <li key={idx}>
                  <Link href={`/properties/${id}`}>
                    <p className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out">{name}</p>
                  </Link>
                </li>
              )
            })}
          </ul>
          </div>

          {/* Company */}
          <div className='mb-6 md:mb-0'>
            <h2 className='text-lg font-semibold mb-2'>Company</h2>
            <ul className='space-y-2'>
              <li>
                <Link href="/">
                  <p className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out">Home</p>
                </Link>
              </li>
              <li>
                <Link href="/properties">
                  <p className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out">Properties</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out">About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out">Contact</p>
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className='mb-6 md:mb-0'>
            <h2 className='text-lg font-semibold mb-2'>Connect</h2>
            <ul className='space-y-2'>
              {socials && socials.map((social, idx) => {
                const { name, link } = social;
                return (
                  <li key={idx}>
                    <Link href={link}>
                      <p className="opacity-70 hover:opacity-100 transition-all duration-300 ease-in-out">{name}</p>
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className='w-full flex justify-center items-center mt-8 opacity-70'>
          <p>@ 2025 The Grand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;