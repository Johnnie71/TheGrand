import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'

interface NavBarProps {
  toggle: () => void;
}

const NavBar: React.FC<NavBarProps> = ({ toggle }) => {
  const pathName = usePathname();

  return (
    <>
      <nav className="w-full h-14 bg-white backdrop-blur-md opacity-80 fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-4 h-full max-w-screen-2xl">
          <div className="flex justify-between items-center h-full">
            <div className="text-black">
              <h1 className="text-xl font-extrabold">The Grand</h1>
            </div>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-x-6 text-black">
              <li>
                <Link href="/">
                  <p className={`hover:underline hover:text-opacity-10 hover:font-semibold transition-all duration-300 ease-in-out  ${pathName == "/" ? 'font-semibold underline': ""}`}>Home</p>
                </Link>
              </li>
              <li>
                <Link href="/properties">
                  <p className={`hover:underline hover:text-opacity-10 hover:font-semibold transition-all duration-300 ease-in-out  ${pathName == "/properties" ? 'font-semibold underline': ""}`}>Properties</p>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <p className={`hover:underline hover:text-opacity-10 hover:font-semibold transition-all duration-300 ease-in-out  ${pathName == "/about" ? 'font-semibold underline': ""}`}>About</p>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <p className={`hover:underline hover:text-opacity-10 hover:font-semibold transition-all duration-300 ease-in-out  ${pathName == "/contact" ? 'font-semibold underline': ""}`}>Contact</p>
                </Link>
              </li>
            </ul>

            {/* Mobile Hamburger Menu */}
            <div className="md:hidden text-black" onClick={toggle}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                <path
                  d="M3 6h18M3 12h18M3 18h18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;