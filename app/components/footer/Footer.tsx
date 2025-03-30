'use client'
import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Twitter } from 'lucide-react';

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
    <footer className="bg-luxury-black text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            {/* <Link href="/" className="inline-block"> */}
              <h2 className="text-2xl font-serif font-bold">
                <span>The</span>
                <span className="ml-1 text-gold-light">Brand</span>
              </h2>
            {/* </Link> */}
            <p className="text-sm text-gray-300 leading-relaxed">
              Redefining luxury living with exceptional properties and unmatched service. Experience the epitome of sophistication with The Brand.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold-light transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-light transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-light transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold-light transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-gray-300 hover:text-gold-light transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-gold-light transition-colors text-sm">
                  Properties
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-gold-light transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-gold-light transition-colors text-sm">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-light transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-gold-light transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-light mt-0.5 mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">
                  123 Luxury Avenue, Skyline District, New York, NY 10001
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-gold-light mr-3 flex-shrink-0" />
                <span className="text-sm text-gray-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-gold-light mr-3 flex-shrink-0" />
                <a href="" className="text-sm text-gray-300 hover:text-gold-light transition-colors">
                  info@thebrand.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-medium mb-6">Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full bg-luxury-gray text-white px-4 py-3 text-sm border border-gray-700 rounded-sm focus:outline-none focus:border-gold-light"
                required
              />
              <button
                type="submit"
                className="w-full bg-gold-dark hover:bg-gold text-white py-3 text-sm rounded-sm transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-luxury-gray text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} The Brand. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;