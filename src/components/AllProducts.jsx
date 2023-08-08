import React from "react";
import { GrFormClose } from "react-icons/gr";
import { AiOutlineClose } from "react-icons/ai";
import { HiMenuAlt2 } from "react-icons/hi";
import { FaFilter } from "react-icons/fa";
import FilterComponent from "./FilterBar";

const AllProduct = ({ cards }) => {
  return (
    <>
    {/* <FilterComponent/> */}
    <div className="w-full max-w-screen-xl mx-auto px-4  mb-14">
    {/* <label
          htmlFor="my-drawe"
          className="drawer-button btn btn-ghost btn-circle"
        >
          <FaFilter size={24} />
        </label> */}
      <div className="flex mt-4">
        <div className="relative w-1/2 mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font px-4 aos-init aos-animate mb-2">
            Products
          </h1>
          <div className="absolute bottom-0 left-0 w-20 h-1 bg-primary"></div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cards.map((card, index) => (
          <a
            key={card.id}
            href={card.link} // Replace with the appropriate link
            className="card bg-base-100 shadow-xl relative hover:shadow-lg cursor-pointer transition duration-300"
          >
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
          </a>
        ))}
      </div>
    </div>
        </>
  );
};

export default AllProduct;
