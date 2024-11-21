import React from 'react'
import Image from 'next/image'
import Logo from "../public/assets/wlogo.svg"
import Profile from '../public/assets/profile.png'

const Navbar = () => {
  return (
    <nav className='h-32 w-full flex  justify-between items-center px-8 border-b-2 border-slate-200' >
      <div className='flex items-center' >
        <Image
        src={Logo}
        width={100} 
        height={100}
        alt='logo'
        className=''
        />
        <h1 className='my-auto text-3xl font-inter leading-3 font-bold'>WhatBytes</h1>
      </div>
      <div className=' flex items-center border-slate-300 border px-2 py-1 rounded-md'>
        <Image 
         src={Profile}
         alt='profile'
         width={30}
         height={30}
         className=' bg-sky-200 border-none rounded-full p-0.5 mr-1.5 '
         />
        <span className='font-bold'>Rahil Siddique</span>

      </div>
    </nav>
  )
}

export default Navbar
