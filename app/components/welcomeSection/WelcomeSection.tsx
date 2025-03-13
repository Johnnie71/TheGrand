import React from 'react';

const WelcomeSection = () => {
  return (
    <section
      id='welcome'
      className="w-full flex items-center max-w-full"
    >
      <div
        className='w-full flex flex-col justify-center items-center py-24 gap-y-8 bg-[#F9FAFB] text-center'
      >
        <h1 className='text-black text-4xl font-semibold'>Welcome to The Grand</h1>
        <p className='md:w-6/12 text-xl'>Where luxury meets lifestyle. We craft living spaces that transcend ordinary residential experiences, delivering unmatched quality and sophistication in every detail.</p>
        <p className='text-2xl'>Timeless Design. Unparalleled Comfort</p>

      </div>
    </section>
  )
};

export default WelcomeSection;