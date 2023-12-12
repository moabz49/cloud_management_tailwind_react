import React from 'react'
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaTwitch,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <section className='w-full mt-20 text-neutral-400 px-2 bg-slate-900 '>
      {/* width margin bg div h div*/}
      <div className='max-w-[1240px] mx-auto pt-12 pb-8 '>
        {/* both divs wrap */}
        <div className='flex flex-col mx-4'>
          {/* Top div wrap */}
          <div className="flex-col w-full lg:flex-row lg:flex lg:space-x-6 ">
              {/* 4 columns div */}
              <div className='grid grid-cols-2 md:grid-cols-4 mb-12 lg:mb-6 lg:flex-1'>
                <div >
                  <h3 className='uppercase font-semibold text-xl mb-1'>solutions</h3>
                  <ul className='space-y-1 capitalize ml-3'>
                    <li>Marketing</li>
                    <li>Analytics</li>
                    <li>Commerce</li>
                    <li>Data</li>
                    <li>Cloud</li>
                  </ul>
                </div>
                <div>
                  <h3 className='uppercase font-semibold text-xl mb-1'>support</h3>
                  <ul className='space-y-1 capitalize ml-3'>
                    <li>pricing</li>
                    <li>documentation</li>
                    <li>guides</li>
                    <li>API status</li>
                  </ul>
                </div>
                <div>
                  <h3 className='uppercase font-semibold text-xl mb-1'>company</h3>
                  <ul className='space-y-1 capitalize ml-3'>
                    <li>about</li>
                    <li>blog</li>
                    <li>jobs</li>
                    <li>press</li>
                    <li>partners</li>
                  </ul>
                </div>
                <div>
                  <h3 className='uppercase font-semibold text-xl mb-1'>legal</h3>
                  <ul className='space-y-1 capitalize ml-3 '>
                    <li>claims</li>
                    <li>privacy</li>
                    <li>terms</li>
                    <li>policies</li>
                    <li>conditions</li>
                  </ul>
                </div>
              </div>
              {/* Subscribe div */}
              <div>
                <div className='flex-col w-full'>
                  <h3 className='font-bold uppercase mb-4 text-xl'>subscribe to our newsletter</h3>
                  <p className='mb-2 pr-12'>The latest news, articles and resources sent to your inbox weekly.</p>
                  <div className='flex space-x-4 w-full'>
                    <label class="relative block">
                      <span class="sr-only">Search</span>
                      <span class="absolute inset-y-0 left-0 flex items-center pl-2">
                      <MagnifyingGlassIcon className="h-6 w-6 text-gray-500" />
                      </span>
                      <input class="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 px-20 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-indigo-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search"/>
                    </label>
                    <button className='px-4 py-2 bg-indigo-600 rounded-lg text-slate-200 text-sm'> Submit</button>
                  </div>
                </div>
              </div>
          </div>
          {/* Bottom row wrap*/}
            <div className='flex-col border-neutral-400 border-t mt-8 md:flex-1 '>
              {/* copyright */}
              <div className='mt-4'>
                <h3 className='text-sm'> © 2023 Your Company. All Rights Reserved</h3>
              </div>
              {/* icons */}
              <div className='flex flex-row justify-between sm:max-w-[300px] mt-4 '>
                <FaFacebook />
                <FaInstagram />
                <FaTwitter />
                <FaTwitch />
                <FaGithub />
              </div>
            </div>
        </div>
      </div>

    </section>
  )
}

export default Footer