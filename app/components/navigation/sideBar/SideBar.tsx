import React from 'react';
import Link from 'next/link';

interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const SideBar: React.FC<Props> = ({ isOpen, toggle }) => {
  return (
    <>
      {/* Sidebar for mobile */}
      <div
        className={`fixed top-0 right-0 w-full h-full bg-white z-10 transform transition-transform ease-in-out duration-300 md:hidden ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button className="absolute top-5 right-5 p-5" onClick={toggle}>
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <ul className="flex flex-col items-center justify-center space-y-6 text-xl h-full">
          <li>
            <Link href="/" onClick={toggle}><p>Home</p></Link>
          </li>
          <li>
            <Link href="/about" onClick={toggle}><p>About Us</p></Link>
          </li>
          <li>
            <Link href="/properties" onClick={toggle}><p>Properties</p></Link>
          </li>
          <li>
            <Link href="/contact" onClick={toggle}><p>Contact Us</p></Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SideBar;
