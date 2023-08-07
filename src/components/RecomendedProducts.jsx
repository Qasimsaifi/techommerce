"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = ({ cards }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4, // Adjust the number of cards to show at once
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3, // Show 3 cards on screens with width <= 1024px
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1, // Show 1 card on screens with width <= 640px
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4">
      <Slider {...settings}>
        {cards.map((card, index) => (
          <div key={index} className="focus:outline-none">
            <div className="w-72 p-4 mx-auto">
              <div className="card bg-base-100 shadow-xl relative hover:shadow-lg cursor-pointer transition duration-300">
                <figure className="relative overflow-hidden">
                  <img
                    src={card.imageSrc}
                    alt={card.title}
                    className="max-w-full h-auto transition duration-300 transform hover:scale-110"
                  />
                  <img
                    src={card.hoverImageSrc}
                    alt={card.title}
                    className="max-w-full transition duration-300 transform hover:-translate-y-1 hover:scale-105 h-auto opacity-0 absolute top-0 left-0 hover:opacity-100 scale-125"
                  />
                </figure>
                <div className="card-body p-2">
                  <h2 className="card-title text-sm font-semibold">
                    {card.title}
                  </h2>
                  <p className="text-lg font-semibold mt-2">{card.price}</p>{" "}
                  {/* Add price */}
                  <p className="text-gray-600 text-xs mt-1">
                    {card.category}
                  </p>{" "}
                  {/* Show category */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
