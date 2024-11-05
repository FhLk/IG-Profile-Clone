"use client"
import Link from 'next/link'
import React, { FC } from 'react'

const NavbarLeft : FC = () => {
  return (
    <div className='navbar'>
      <Link href={"/"} className=''>
        <button className='bg-[#D1E9F6] h-[150px] w-[150px] rounded-full duration-100 hover:opacity-70'>App Picture</button>
      </Link>
    </div>
  )
}

export default NavbarLeft
