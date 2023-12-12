import React from 'react'
import officeTeam from './office-team.jpeg'
import { PhoneIcon, ArrowLongRightIcon, LifebuoyIcon , FilmIcon } from "@heroicons/react/24/outline";


const Support = () => {
  return (
    <section  name='support' className='w-full mt-16'>
      <div className='w-full h-[700px] bg-gray-900/90 absolute '>
          <img  className='w-full h-full object-cover mix-blend-overlay ' alt="office-team" src={officeTeam}/>
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative text-center '>
          <div className='px-4 py-12 space-y-6'>
            <h2 className='uppercase font-extralight text-3xl '> support</h2>
            <h3 className='text-5xl font-semibold '>Finding the right team</h3>
            <p className='text-neutral-300 text-lg'>Lorem uis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
            <div className='bg-white rounded-xl shadow-md shadow-gray-400 text-start'>
              <div className='p-8'>
                  <PhoneIcon className="w-16 p-4 text-white bg-indigo-600 -mt-16 mb-4 rounded-xl shadow-md shadow-gray-400 " />
                  <h1 className='font-bold capitalize text-xl mb-4'>Sales</h1>
                  <p className='text-neutral-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut.</p>
              </div>
              <div className='px-8 w-full bg-slate-100 rounded-b-xl py-3'>
                <p className='text-sm font-bold capitalize text-indigo-500 flex items-center'> Contact us <ArrowLongRightIcon className="h-6 w-6 text-indigo-600 ml-2 text-sm" /></p>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-md shadow-gray-400 text-start'>
              <div className='p-8'>
                  <LifebuoyIcon className="w-16 p-4 text-white bg-indigo-600 -mt-16 mb-4 rounded-xl shadow-md shadow-gray-400 " />
                  <h1 className='font-bold capitalize text-xl mb-4'>technical support</h1>
                  <p className='text-neutral-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut.</p>
              </div>
              <div className='px-8 w-full bg-slate-100 rounded-b-xl py-3'>
                <p className='text-sm font-bold capitalize text-indigo-500 flex items-center'> Contact us <ArrowLongRightIcon className="h-6 w-6 text-indigo-600 ml-2 text-sm" /></p>
              </div>
            </div>
            <div className='bg-white rounded-xl shadow-md shadow-gray-400 text-start'>
              <div className='p-8'>
                  <FilmIcon className="w-16 p-4 text-white bg-indigo-600 -mt-16 mb-4 rounded-xl shadow-md shadow-gray-400 " />
                  <h1 className='font-bold capitalize text-xl mb-4'>media inquiries</h1>
                  <p className='text-neutral-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum sit amet justo donec enim diam vulputate ut.</p>
              </div>
              <div className='px-8 w-full bg-slate-100 rounded-b-xl py-3'>
                <p className='text-sm font-bold capitalize text-indigo-500 flex items-center'> Contact us <ArrowLongRightIcon className="h-6 w-6 text-indigo-600 ml-2 text-sm" /></p>
              </div>
            </div>
          </div>
      </div>
    </section>

  )  
}

export default Support;