"use client"
import React, { FC } from 'react'

const Infor : FC = () => {
  return (
    <div className="grid grid-cols-4 items-center justify-around font-semibold text-3xl my-5 text-center">
        <div className="justify-self-start">
        <img src="./profile-picture.jpg" className="rounded-full" height={180} width={180}/>
        </div>
        <div className="w-[100px] mx-5">
        <h3>100</h3>
        <h4 className="text-xl">posts</h4>
        </div>
        <div className="w-[100px] mx-5">
        <h3>100</h3>
        <h4 className="text-xl">followers</h4>
        </div>
        <div className="w-[100px] mx-5">
        <h3>100</h3>
        <h4 className="text-xl">following</h4>
        </div>
   </div>
  )
}

export default Infor
