import Link from 'next/link'
import React, { FC } from 'react'

const Picture : FC = () => {
  return (
    <div className="relative">
        <img className='relative object-cover h-[300px] w-[300px]' src="./First-Pic.jpg" alt="example"/>
        {/* <img className='absolute right-3 top-3' src="./list.svg" alt="video" height={40} width={40}/> */}
        {/* <img className='absolute right-3 top-3' src="./video.svg" alt="video" height={40} width={40}/> */}
        {/* <img className='absolute right-3 top-3' src="./pin.svg" alt="pin" height={40} width={40}/> */}
        <Link href="/" className=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 "></Link>
    </div>
  )
}

export default Picture
