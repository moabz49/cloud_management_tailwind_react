import React from 'react'
import { CheckBadgeIcon } from "@heroicons/react/24/outline";


const Pricing = () => {
  return (
    <section name='pricing' className='w-full text-white my-24 border' >
      <div className='w-full h-[800px] bg-slate-900 absolute mix-blend-overlay'></div>
        <div className='items-center text-center mt-20 space-y-5 px-20'>
          <h2 className='uppercase text-4xl font-extralight'> Pricing  </h2>
          <h3 className='text-white text-5xl font-bold '>The right price for your research.</h3>
          <p className='text-neutral-400 text-lg'>Lorem ipsum at maxime Voluptates reiciendis laborum veritatis nemo voluptate doloremque harum possimus, commodi amet. Est pariatur impedit quisquam sapiente praesentium velit ducimus. Quae obcaecati atque minus quis iusto</p>
        </div>
        <div className='relative flex flex-col justify-center mt-10 items-center w-full'>
          <div className='grid md:grid-cols-2 mx-20 gap-8'>
            <div className='relative flex flex-col text-black bg-white rounded-lg text-start px-8 py-12 shadow-md shadow-gray-300 max-w-[480px]' >
              <div className='space-y-4 mb-8'>
                <span className='uppercase bg-indigo-200 text-indigo-900 rounded-2xl text-xs py-1 px-2'>standard</span>
                <h1 className='text-5xl font-bold'>$49<span className='text-sm'>/mo</span></h1>
              </div>
              <p className='text-neutral-400 text-lg'>Lorem ipsum dolor, gres mun sit amet consectetur adipisicing elit. Official eligendi.</p>
              <div className='space-y-6 mt-8 text-lg'>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <button className='capitalize w-full py-3 my-12 bg-indigo-500 text-white rounded-lg hover:scale-105 hover:bg-indigo-500/90 '>get started </button>
              </div>
            </div>
            <div className='relative flex flex-col text-black bg-white rounded-lg text-start px-8 py-12 shadow-md shadow-gray-300 max-w-[480px]' >
              <div className='space-y-4 mb-8'>
                <span className='uppercase bg-indigo-200 text-indigo-900 rounded-2xl text-xs py-1 px-2'>premium</span>
                <h1 className='text-5xl font-bold'>$79<span className='text-sm'>/mo</span></h1>
              </div>
              <p className='text-neutral-400 text-lg'>Lorem ipsum dolor, gres mun sit amet consectetur adipisicing elit. Official eligendi.</p>
              <div className='space-y-6 mt-8 text-lg'>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <p className='flex items-center '><CheckBadgeIcon className="w-8 text-emerald-600 mr-4" /> Lorem, ipsum dolor.</p>
                  <button className='capitalize w-full py-3 my-12 bg-indigo-500 text-white rounded-lg hover:scale-105 hover:bg-indigo-500/90 '>get started </button>
              </div>
            </div>
          </div>
        </div>

    </section>
  )
}

export default Pricing;