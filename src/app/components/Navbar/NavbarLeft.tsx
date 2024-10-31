"use client"
import Link from 'next/link'
import React, { FC } from 'react'

const NavbarLeft : FC = () => {
  return (
    <div className='navbar'>
      <Link href={"/"}>App Picture</Link>
      <Link href={"/"}>Add Video</Link>
    </div>
  )
}

export default NavbarLeft
