import React from 'react';

interface Props {
  image: string;
}

const Hero: React.FC<Props> = ({ image }) => {

  console.log(image)
  return (
    <section 
      id='hero'
      className='relative w-full h-screen flex items-center justify-center bg-cover bg-center max-w-full'
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="relative z-10 text-white text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">Welcome to CLAQ HAUS Pole Fitness</h1>
        <p className="text-lg sm:text-2xl">Strength, Confidence, Empowerment</p>
      </div>
    </section>
  )
}

export default Hero