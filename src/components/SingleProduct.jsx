"use client"
import React, { useState } from 'react';
import { CgArrowLongRight } from 'react-icons/cg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const SingleProduct = () => {
  const images = [
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/mousepad.webp',
    'https://codeswear.nyc3.cdn.digitaloceanspaces.com/constants/landing/collections/oversizedtshirt.webp',// Add more image URLs here
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col md:flex-row">
        <div className="carousel-container">
          <Carousel
            selectedItem={currentIndex}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            showArrows
            autoPlay
            infiniteLoop
            interval={8000}
            onChange={(index) => setCurrentIndex(index)}
          >
            {images.map((src, idx) => (
              <div key={idx} className="carousel-slide">
              <div className="carousel-image-container">
                <img
                  src={src}
                  alt={`Slide ${idx}`}
                  className="object-contain h-[300px] md:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]"
                />
              </div>
            </div>
            ))}
          </Carousel>
          <div className="flex justify-center mt-2">
            {images.map((src, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`mx-1 ${
                  idx === currentIndex ? 'border-primary' : 'border-transparent'
                } border-2`}
              >
                <img
                  src={src}
                  alt={`Thumb ${idx}`}
                  className="h-16 w-16 object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center md:ml-12 mt-6 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Premium T-Shirts</h1>
          <p className="py-2">
            Our T-Shirts are 100% made of cotton. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex items-center mt-4">
            <span className="text-xl text-primary-500 font-bold">$29.99</span>
            <button className="btn btn-primary ml-4">
              Add to Cart <CgArrowLongRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
