
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import home from './Assets/home1.jpg'
import office from './Assets/office3.jpeg'
import bedroom from './Assets/bedroom2.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './App.css';

const MobileCarousel = () => {
  const images = [
    { src: home,
     alt: 'home furniture ' ,
     heading:'Elegant Home Furniture',
     paragraph:'Transform your living spaces with our curated collection of home furniture, blending timeless design with modern comfort. From cozy sofas to chic coffee tables, find the perfect pieces to create a welcoming and stylish home'
    
    },
    { src: bedroom, 
        alt: 'Bedroom' ,
        heading:'Serene Bedroom Essentials',
     paragraph:'Create a peaceful sanctuary with our range of bedroom furniture designed for relaxation and comfort. From luxurious beds to spacious wardrobes, our collection combines functionality with sophisticated style to help you unwind in elegance'
    
    },
    { src: office, 
        alt: 'Office',
        heading:'Ergonomic Office Solutions',
     paragraph:'Elevate your productivity with our ergonomic office furniture, tailored to suit modern workspaces. Discover a range of desks, chairs, and storage solutions that provide both comfort and efficiency, perfect for home offices or professional settings.'
     },
  ];

  return (
    <>
      {/* for mobile device */}
      <div className="sm:hidden text-center py-[50px]">
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          loop={true}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.src} alt={image.alt} className='w-[280px] m-auto'  />
              <h1 className='text-[27px] font-semibold my-3'>{image.heading}</h1>
              <p>{image.paragraph}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* for desktop */}
      <div className="hidden sm:grid sm:grid-cols-3 sm:gap-4 sm:px-[30px] ms:px-[100px]">
        {images.map((image, index) => (
          <div key={index} className="col-span-1 text-center  py-[150px]">
            <img src={image.src} alt={image.alt} className="w-[400px] h-[300px] m-auto" />
            <h1 className='text-[22px] font-semibold py-4'>{image.heading}</h1>
              <p>{image.paragraph}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MobileCarousel;
