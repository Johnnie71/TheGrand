import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react';

interface NavBarProps {
  toggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggle }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathName = usePathname();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Properties', path: '/properties' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 h-14 md:h-20 z-50 transition-all duration-300 py-4 md:py-6 ${isScrolled ? 'bg-white/60 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 h-full max-w-screen-2xl">
        <div className="flex justify-between items-center h-full">
          <Link 
            href="/" 
            className="relative flex items-center transition-all duration-300"
          >
            <span className="text-2xl sm:text-3xl font-serif font-bold tracking-tight">
              <span>The</span>
              <span className="ml-1 text-gold-dark">Brand</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {links.map(link => (
              <Link
                href={link.path == '/' ? '/' : "#"}
                key={link.path}
                className={`nav-link text-sm font-medium tracking-wide ${pathName == link.path ? 'nav-link-active' : ''}`}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#" 
              className="btn-primary text-sm px-5 py-2.5 shadow-sm"
            >
              Schedule Tour
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className='md:hidden text-luxury-black focus:outline-none'
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label='Toggle mobile menu'
          >
            {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )
            }
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`fixed h-screen inset-0 top-[60px] z-40 bg-white transition-all duration-300 ease-in-out transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <nav className='flex flex-col space-y-6 bg-white text-center p-10'>
            {links.map(link => (
              <Link
                // href={link.path}
                href="#"
                key={link.path}
                className={`text-lg font-medium ${pathName == link.path ? 'text-gold-dark' : 'text-luxury-black'}`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link 
              // href="/contact" 
              href="#"
              className="btn-primary text-sm px-5 py-2.5 shadow-sm text-center"
            >
              Schedule Tour
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;