import Link from 'next/link'
import React, { FC } from 'react'

interface GalleryData {
  src : string
}

const Picture : FC<GalleryData> = ({ src }) => {
  return (
    <div className="relative w-full">
        <img className='relative object-cover min-w-full max-h-[300px] min-h-[300px]' src={src} alt="example"/>
        {/* <img className='absolute right-3 top-3' src="./list.svg" alt="video" height={40} width={40}/> */}
        {/* <img className='absolute right-3 top-3' src="./video.svg" alt="video" height={40} width={40}/> */}
        {/* <img className='absolute right-3 top-3' src="./pin.svg" alt="pin" height={40} width={40}/> */}
        <Link href="/" className=" absolute w-full h-full top-0 left-0 bg-black opacity-0 z-10 transition-opacity duration-300 hover:opacity-30 "></Link>
    </div>
  )
}

export default Picture
