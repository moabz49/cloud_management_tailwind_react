import React from 'react'

const About = () => {
  return (
    <section name='about' className='mt-10 w-full flex justify-center items-center'>
      <div className='max-w-[1240px] flex flex-col w-full items-center'>
        <div className='flex-col max-w-3xl text-center items-center mx-4 mb-8'>
          <h1 className='font-bold text-4xl md:text-6xl px-8 mt-8 mb-6 transition-all'> Trusted by developers across the world  </h1>
          <p1 className='text-neutral-500 md:text-lg '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.  </p1>
        </div>
        <div className='flex flex-col sm:flex-row justify-between w-full sm:gap-6 px-4'>
          <div className='shadow-gray-400 shadow-lg px-4 py-16 text-center flex-1'>
              <h1 className='text-5xl font-semibold text-indigo-600 '>100%</h1>
              <p className='text-neutral-400 text-sm  capitalize'>completion</p>
          </div>
          <div className='shadow-gray-400 shadow-lg px-4 py-16 text-center flex-1'>
              <h1 className='text-5xl font-semibold text-indigo-600 '>24/7 </h1>
              <p className='text-neutral-400 text-sm  capitalize'>delivery</p>
          </div>
          <div className='shadow-gray-400 shadow-lg px-4 py-16 text-center flex-1'>
              <h1 className='text-5xl font-semibold text-indigo-600 '>100k</h1>
              <p className='text-neutral-400 text-sm  capitalize'>transactions</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About