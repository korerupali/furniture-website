import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import Bachachan from './Assets/Bachchan.webp'
import Rashmika from './Assets/Rashmika Mandanna.jpeg'
import Dipika from './Assets/Deepika Padukone.jpeg'
import katrina from './Assets/katrina.jpeg'
import shradhha from './Assets/shradhha.jpeg'



import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './App.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const CarouselFiveImg = () => {
  const images = [
    { src: Bachachan,
       alt: 'bachchan',
       heading:'Aishwarya Rai Bachchan',
      paragraph:'I absolutely love my new sofa from Furniture. It is not only stylish but also comfortable. I have received so many compliments from friends and family'

      },
    { src: Rashmika,
       alt: 'Rashmika',
       heading:'Rashmika Mandanna',
       paragraph:'The quality of the dining table is amazing. It is sturdy and fits perfectly in my dining room. The finish is beautiful and it was easy to assemble'
      },
    { src: Dipika,
       alt: 'Dipika',
       heading:'Dipika Padukon',
      paragraph:'I purchased a bedroom set and could not be happier! The bed is so comfortable, and the design is modern and chic. It transformed my room completely'
     },
    { src:katrina,
       alt: 'Katrina Kaif',
        heading:'Katrina Kaif',
      paragraph:'The office chair I bought has made such a difference in my work-from-home setup. It is ergonomic and stylish. Highly recommend!'
       },
    { src: shradhha, 
      alt: 'Shraddha Kapoor',
      heading:'Shraddha Kapoor',
      paragraph:'The storage units I ordered are perfect for my small apartment. They are functional and add a nice touch to my decor. Very happy with my purchase' },
  ];

  return (
    <div className="container mx-auto text-center mb-[100px] pb-[30px]">
      <Swiper
        modules={[Pagination, Navigation]}
        spaceBetween={30} 
        loop={true}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
         
          0: {
            slidesPerView: 1,
           
          },
          
          760: {
            slidesPerView: 3,
            
          },
        }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img src={image.src} alt={image.alt} className="w-[250px] sm:w-[240px] h-[170px] sm:h-[140px] m-auto mb-[20px]" />
            <h1 className='text-[20px] font-semibold mb-3'>{image.heading}</h1>
            <p className='mb-3'>{image.paragraph}</p>
            <div>
            <FontAwesomeIcon icon={faStar} className='text-[rgb(207,207,8)]'/>
            <FontAwesomeIcon icon={faStar} className='text-[rgb(207,207,8)]'/>
            <FontAwesomeIcon icon={faStar} className='text-[rgb(207,207,8)]'/>
            <FontAwesomeIcon icon={faStar} className='text-[rgb(207,207,8)]'/>
            <FontAwesomeIcon icon={faStar} className='text-[rgb(207,207,8)]'/>
            </div>
            
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselFiveImg;
