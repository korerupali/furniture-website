import React from 'react'
import firstImage from './Assets/First image.png'

export default function Image() {
  return (
    <>
     <div className="relative overflow-hidden rounded-lg shadow-xl">
      <img src={firstImage} alt="Home decore Img"  className="object-cover w-full h-full" />
    </div>
    </>
  )
}
