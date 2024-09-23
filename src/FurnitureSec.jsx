import React from 'react'
import sofa from './Assets/sofa.png'
  import table from './Assets/table.png'
  import chair from './Assets/chair.png'
  import "./App.css";

export default function FurnitureSec() {
   const furnitureInfoDiv = [
      {
        image: sofa,
        heading: 'Durable Sofas',
        paragraph: 'Our sofas are built to last, with sturdy frames and high-quality cushions that maintain their shape over time.'
      },
      {
        image: table,
        heading: 'Solid Wood Tables',
        paragraph: 'Crafted from sustainably sourced solid wood, our tables offer exceptional strength and beauty that stands the test of time.'
      },
      {
        image: chair,
        heading: 'Comfortable Chairs',
        paragraph: 'Designed for both form and function, our chairs combine ergonomic design with premium materials for long-lasting comfort.'
      }
    ];



  return (
    <div>
        <div  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ">
      {furnitureInfoDiv.map((v,i)=> (
      
        <div key={i} className="shadow-lg text-center pb-4">
          
        <img
          src={v.image}
          alt=""
          className=" w-[180px] sm:w-[150px] md:w-[200px] md:h-[220px] m-auto"
        />
        <h4 className='text-[22px] font-semibold my-3'>{v.heading}</h4>
        <p className='mb-4'>{v.paragraph}</p>
       

        </div>
     
      )

      )}
    </div>
    </div>
  )
}
