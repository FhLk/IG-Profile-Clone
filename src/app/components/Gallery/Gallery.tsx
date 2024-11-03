import React, { FC } from 'react'
import Picture from './Picture'

const Gallery : FC = () => {
  const listPicture = ["","","","","","","","","","","","","","","","","",""]
  return (
    <div className='bg-[#F1D3CE] w-full grid grid-cols-3 gap-1'>
      {listPicture.map((item,index) => (
        <Picture key={index}/>   
      ))}
    </div>
  )
}

export default Gallery
