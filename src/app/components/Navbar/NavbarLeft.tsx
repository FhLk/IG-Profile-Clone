"use client"
import Link from 'next/link'
import React, { FC } from 'react'

const NavbarLeft : FC = () => {
  return (
    <div className='navbar'>
      <Link href={"/"} className=''>
        <button className='bg-white h-[150px] w-[150px] rounded-full'>App Picture</button>
      </Link>
      <Link href={"/"} className=''>
        <button className='bg-white h-[150px] w-[150px] rounded-full'>App Video</button>
      </Link>
    </div>
  )
}

export default NavbarLeft
