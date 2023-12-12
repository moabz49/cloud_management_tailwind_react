import React from 'react'
import name from './name.png'
import { CloudArrowUpIcon, PaperAirplaneIcon, CircleStackIcon, ServerStackIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section name='home' className='w-full bg-zinc-200 flex flex-col justify-between relative md:pt-[100px] pb-[200px]'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto '> 
          <div className='flex flex-col justify-center  md:items-start w-full px-2 py-4 space-y-3'>
            <div className='flex flex-row items-center mt-20'>
              <div className='bg-indigo-500 w-6 h-[3px] mr-2 rounded-xl '></div>
              <p className='capitalize'>  Unique Sequencing & Production </p>
            </div>
            <h1 className=' capitalize text-4xl md:text-6xl font-bold '> Cloud<br className='hidden md:flex' /> Management </h1>
            <p> This is our Tech brand.</p>
            <button className='capitalize bg-indigo-600 w-[40%] md:w-[60%] text-white px-8 py-2 rounded-md text-xs sm:text-sm md:text-base  '> Get started</button>
          </div>
          <div>
            <img src={name} alt="" className='w-full'/>
          </div>
          <div className='absolute flex flex-col py-8 md:min-w-[530px] bottom-[6%] mx-1 md:left-1/2 transform-all md:-translate-x-1/4 bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl   '>
            <p className='capitalize text-lg mb-3'> data service</p>
            <div  className='flex justify-between flex-wrap px-4'>
              <p className='flex px-2 sm:px-4 py-2'> <CloudArrowUpIcon className="h-6 w-6 text-gray-500 mr-2"/>App security  </p>
              <p className='flex px-2 sm:px-4 py-2'><CircleStackIcon className="h-6 w-6 text-gray-500 mr-2" /> Clouds Data</p>
              <p className='flex px-2 sm:px-4 py-2'><ServerStackIcon className="h-6 w-6 text-gray-500 mr-2" />Api </p>
              <p className='flex px-2 sm:px-4 py-2'><PaperAirplaneIcon className="h-6 w-6 text-gray-500 mr-2 -rotate-90" />Api</p>

            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero