"use client";
import React, { useState } from 'react'
import NavBar from './navBar/NavBar';
import SideBar from './sideBar/SideBar';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
      setIsOpen(!isOpen);
  }

  return (
    <div className='z-50'>
      <NavBar toggle={toggle} />
      <SideBar isOpen={isOpen} toggle={toggle} />
    </div>
  );
};

export default Navigation;