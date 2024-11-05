import React, { FC } from 'react'
import Picture from './Picture'
import Filter from './Filter'

const Gallery : FC = () => {
  const listPicture = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26]
  return (
    <div >
      <Filter/>
      <div className='bg-[#F1D3CE] w-full grid grid-cols-3 gap-1'>
        {listPicture.map((item,index) => (
          <Picture key={index} src={`./Gallery/Gallery${item}.jpg`}/>   
        ))}
      </div>
    </div>
  )
}

export default Gallery
