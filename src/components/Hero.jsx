"use client"
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const images = [
  // '/1.jpg',
  // '/2.jpg',
  // '/3.jpg',
  // '/4.jpg',
  'https://cdn.pixabay.com/photo/2017/06/21/23/10/tshirt-2429016_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/06/21/20/51/tshirt-2428521_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/05/18/15/40/hippie-2323918_1280.jpg',
  'https://cdn.pixabay.com/photo/2017/05/13/18/48/shoe-2310400_1280.jpg',
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
  <div className="carousel-container">
    <Carousel
      selectedItem={currentIndex}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      showArrows
      autoPlay
      infiniteLoop
      interval={3000}
    >
      {images.map((src, idx) => (
        <div key={idx} className="carousel-slide">
  <img
    src={src}
    alt={`Slide ${idx}`}
    className="object-cover w-full h-96 sm:h-96 lg:h-[90vh] xl:h-[90vh] 2xl:h-[90vh]"
  />
</div>

      ))}
    </Carousel>
  </div>
  <div className="absolute inset-0 flex flex-col items-center justify-end p-4 md:p-8 lg:p-16 xl:p-32 mb-4">
   
    <button className="btn">START SHOPING</button>
  </div>
</div>

  );
};

export default HeroSection;
