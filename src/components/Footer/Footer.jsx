import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Footer = () => {
  return (
    <footer className='bg-zinc-100 py-15 mt-20'>
      <div className='flex flex-wrap gap-y-12 max-w-[1400px] mx-auto px-10'>
        <div className='flex-1 basis-[300px]'>
          <a 
            href="#" 
            className="text-3xl font-bold"
          >
            Home
            <span className="text-teal-500">S</span>hop
          </a>

          <p className='text-zinc-600 mt-6 max-w-[350px]'>
            Freshness you trust, quality you deserve.
          </p>
          <p className='text-zinc-600 mt-3'>
            2025 &copy; All Rights Reserved.
          </p>
        </div>

        <ul className='flex-1'>
          <li>
            <h5 className='text-zinc-800 text-2xl font-bold'>
              Company
            </h5>
          </li>
          <li className='mt-6'>
            <a 
              href="#" 
              className='text-zinc-800 hover:text-teal-500'
            >
              About
            </a>
          </li>
          <li className='mt-6'>
            <a 
              href="#" 
              className='text-zinc-800 hover:text-teal-500'
            >
              FAQ'S
            </a>
          </li>
        </ul>

        <ul className='flex-1'>
          <li>
            <h5 className='text-zinc-800 text-2xl font-bold'>
              Support
            </h5>
          </li>
          <li className='mt-6'>
            <a 
              href="#" 
              className='text-zinc-800 hover:text-teal-500'
            >
              Support Center
            </a>
          </li>
          <li className='mt-6'>
            <a href="#" className='text-zinc-800 hover:text-teal-500'>
              Feedback
            </a>
          </li>
          <li className='mt-6'>
            <a href="#" className='text-zinc-800 hover:text-teal-500'>
              Contact
            </a>
          </li>
        </ul>

        <div className='flex-1'>
          <h5 className='text-zinc-800 text-2xl font-bold'>
            Stay Connected
          </h5>
          <p className='mt-6 text-zinc-600'>
            Questions or Feedback?<br/>
            We'd love to hear from you.
          </p>
          <div className='flex bg-white mt-6 p-1 rounded-lg'>
            <input 
              type="email" 
              name="email" 
              id="email" 
              autoComplete='off'
              placeholder='Email Address'
              className='h-[5vh] pl-4 flex-1 focus:outline-none'
            />
            <button className='bg-gradient-to-b from-teal-400 to-teal-500 p-2 rounded-lg text-2xl text-white hover:to-teal-600 cursor-pointer'>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;