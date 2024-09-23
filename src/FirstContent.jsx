import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function FirstContent() {
  return (
  <>
    <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
      <h1 className="text-[35px] font-bold text-blue-600">Decorate Your Dream Space With Our Finest Collection</h1>
      <ul className="list-none space-y-3">
        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className='text-[#5bd55b] mr-3'/>Good Quality</li>
        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className='text-[#5bd55b] mr-3'/>100% High quality products</li>
        <li className="flex items-center"><FontAwesomeIcon icon={faCheck} className='text-[#5bd55b] mr-3'/>Largest Network</li>
      </ul>
      <div className="">
        <button className="bg-[#60e360] hover:bg-[#3ad73a] text-white font-bold py-2 px-4 rounded mb-4 mr-3">Start for Free</button>
        <button className="border border-gray-400 text-gray-800 font-semibold py-2 px-4 rounded hover:bg-gray-200 ">How it works?</button>
      </div>
    </div>
    </>
  )
}






