import React from 'react'
import Logo from './Logo'

export default function Header() {
  return (
    <>
    


<div className="flex flex-col sm:flex-row justify-between items-center p-2 bg-gray-100 shadow-md sm:px-[100px] py-6">
      <Logo />
      <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-7 mt-4 sm:mt-0">
        <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[18px] sm:text-[20px] font-bold">Home</li>
        <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[18px] sm:text-[20px] font-bold">About</li>
        <li className="text-gray-700 hover:text-green-500 cursor-pointer text-[18px] sm:text-[20px] font-bold">Contact Us</li>
      </ul>
    </div>
    </>
  )
}
