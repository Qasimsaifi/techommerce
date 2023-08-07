import React from "react";

const BottomCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center items-center mb-28 p-4 xl:mx-10">
      <div className="card bg-base-100 shadow-xl relative hover:shadow-lg cursor-pointer transition duration-300 border-2 h-[150px] rounded-lg ">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-semibold mb-2">
            Premium T-Shirts
          </h2>
          <p className="text-sm ">
            Our T-Shirts are 100% made of cotton.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl relative hover:shadow-lg cursor-pointer transition duration-300 border-2 h-[150px] rounded-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-semibold mb-2">
            Free Shipping
          </h2>
          <p className="text-sm ">
            We ship all over India for FREE.
          </p>
        </div>
      </div>

      <div className="card bg-base-100 shadow-xl relative hover:shadow-lg cursor-pointer transition duration-300 border-2 h-[150px] rounded-lg">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-xl font-semibold mb-2">
            Exciting Offers
          </h2>
          <p className="text-sm ">
            We provide amazing offers & discounts on our products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomCards;
