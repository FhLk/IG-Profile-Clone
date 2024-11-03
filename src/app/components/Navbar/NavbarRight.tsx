"use client"
import Link from 'next/link'
import React, { FC } from 'react'

const NavbarRight : FC = () => {
  return (
    <div className='navbar'>
      <Link href={"/"} className=''>
        <button className='bg-white h-[150px] w-[150px] rounded-full'>Home</button>
      </Link>
      <Link href={"/"} className=''>
        <button className='bg-white h-[150px] w-[150px] rounded-full'>Facebook</button>
      </Link>
    </div>
  )
}

export default NavbarRight
