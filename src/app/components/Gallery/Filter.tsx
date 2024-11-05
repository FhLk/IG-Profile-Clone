import React, { FC } from 'react'

const Filter : FC = () => {
  return (
    <div className='w-full grid grid-cols-3 gap-1'>
        <button className='filter-btn'>
            <img src='./grid.svg' alt="gird" height={20} width={20}/>
        </button>
        <button className='filter-btn'>
            <img src='./video.svg' alt="video" height={25} width={25}/>
        </button>
        <button className='filter-btn'>
            <img src='./hastag.svg' alt="tag" height={25} width={25}/>
        </button>
    </div>
  )
}

export default Filter
