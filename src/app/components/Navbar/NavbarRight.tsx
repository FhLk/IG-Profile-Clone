"use client"
import Link from 'next/link'
import React, { FC } from 'react'

const NavbarRight : FC = () => {
  return (
    <div className='navbar'>
      <Link href={"/"}>Home</Link>
      <Link href={"/"}>Profile</Link>
    </div>
  )
}

export default NavbarRight
