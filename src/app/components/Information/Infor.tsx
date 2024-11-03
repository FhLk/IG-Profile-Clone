"use client"
import React, { FC } from 'react'

const Infor : FC = () => {
  return (
    <div className="grid grid-cols-4 items-center justify-around font-semibold text-3xl my-5 text-center px-5">
        <div className="justify-self-start bg-[#493628] rounded-full p-1">
          <div className='bg-[#F3D0D7]  w-fit rounded-full p-1'>
            <img src="./profile-picture.jpg" className="rounded-full bg-white" height={180} width={180}/>
          </div>
        </div>
        <div className="w-[100px] mx-5">
          <h3>313</h3>
          <h4 className="text-xl">posts</h4>
        </div>
        <div className="w-[100px] mx-5">
          <h3>221</h3>
          <h4 className="text-xl">followers</h4>
        </div>
        <div className="w-[100px] mx-5">
          <h3>855</h3>
          <h4 className="text-xl">following</h4>
        </div>
   </div>
  )
}

export default Infor
