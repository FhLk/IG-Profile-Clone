import React, { FC } from 'react'

const Story : FC = () => {
  return (
    <div className='text-center w-fit my-5 px-5'>
        <button className='bg-[#F0EBE3] rounded-full p-1 mb-3'> 
            <div className='bg-[#F3D0D7] rounded-full p-5'>
                <img src='./plus.svg' height={40} width={40}/>
            </div>
        </button>
        <h5 className='text-sm font-normal'>New Story</h5>
    </div>
  )
}

export default Story
