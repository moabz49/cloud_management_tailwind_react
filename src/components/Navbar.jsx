import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon} from "@heroicons/react/24/outline";
import { Link } from 'react-scroll';

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const handleToggle = () => {
        setNav((prev) => !prev);
    }


    return (
        <section  className='z-10 w-full h-[80px] bg-zinc-200 sticky top-0 drop-shadow-md font-poppins'>
            <navbar className=" relative px-4 flex justify-between items-center w-full h-full"> 
                <h1 className='hover:cursor-pointer font-bold uppercase text-4xl'> brand. </h1>
                <ul className=' hover:cursor-pointer hidden lg:flex items-center space-x-5 capitalize'>
                    <li className='text-sm hover:underline hover:opacity-70' ><Link to="home" smooth={true}  duration={500}>Home </Link> </li>
                    <li className='text-sm hover:underline hover:opacity-70' > <Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                    <li className='text-sm hover:underline hover:opacity-70' > <Link to="support" smooth={true} offset={-50} duration={500}>Support</Link></li>
                    <li className='text-sm hover:underline hover:opacity-70' > <Link to="platforms" smooth={true} offset={-100} duration={500}>Platforms</Link></li>
                    <li className='text-sm hover:underline hover:opacity-70' > <Link to="pricing" smooth={true} offset={-50} duration={500}>Pricing</Link></li>
                </ul>
                <div>
                    <div className='hidden lg:flex gap-x-4 text-sm items-center'>
                        <button className='capitalize opacity:80 hover:border-2 px-6 py-3 hover:border-indigo-500 hover:text-indigo-500'>sign in </button>
                        <button className='capitalize hover:opacity-70 text-slate-100 bg-indigo-600 px-6 py-3 rounded-md hover:'>sign up </button>
                    </div>
                    <div className='lg:hidden items-center' onClick={handleToggle}>
                        {!nav ? <Bars3Icon className="h-8 w-10 hover:opacity-60 border-indigo-600 border-2 text-gray-600 " /> : <XMarkIcon className="h-8 w-10 text-gray-600 hover:opacity-70 border-2 border-gray-600" />}

                    </div>
                </div>
                <div className={!nav ? 'hidden' : 'lg:hidden absolute flex flex-col w-full backdrop-blur-xl? bg-indigo-500 h-[420px] right-0 top-20 pt-8'}>
                    <ul className='hover:cursor-pointer capitalize space-y-6'>
                        <Link onClick={handleToggle} to="home" smooth={true} duration={500} className=" ml-8">
                            <li className='text-sm shadow-md hover:opacity-70 text-white py-2 px-4 hover:scale-105'>Home</li>
                        </Link>
                        <Link onClick={handleToggle} to="about" smooth={true} offset={-200} duration={500} className="ml-8">
                            <li className='text-sm shadow-md hover:opacity-70 text-white py-2 px-4 hover:scale-105'>About</li>
                        </Link>
                        <Link onClick={handleToggle} to="support" smooth={true} offset={-50} duration={500} className="ml-8">
                            <li className='text-sm shadow-md hover:opacity-70 text-white py-2 px-4 hover:scale-105'>Support</li>
                        </Link>
                        <Link onClick={handleToggle} to="platforms" smooth={true} offset={-100} duration={500} className="ml-8">
                            <li className='text-sm shadow-md hover:opacity-70 text-white py-2 px-4 hover:scale-105'>Platforms</li>
                        </Link>
                        <Link onClick={handleToggle} to="pricing" smooth={true} offset={-50} duration={500} className="ml-8">
                            <li className='text-sm shadow-md hover:opacity-70 text-white py-2 px-4 hover:scale-105'>Pricing</li>
                        </Link>
                    </ul>
                    <div className='flex flex-col gap-x-4 text-sm mt-2 mb-2 space-y-2 px-4'>
                        <button className='capitalize hover:opacity:70 px-6 py-3 hover:text-indigo-500 rounded-md bg-zinc-200'>sign in </button>
                        <button className='capitalize hover:opacity-80 text-slate-100 bg-indigo-600 px-6 py-3 rounded-md'>sign up </button>
                    </div>
                </div>
            </navbar>
        </section>
    )
    }

export default Navbar