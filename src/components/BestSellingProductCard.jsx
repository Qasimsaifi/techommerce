import React from 'react';

const BestSellingProductCard = ({ products }) => {
  return (
    <main className="m-5 mb-28 mt-20">
      <div className="flex">
      <div className="relative w-1/2 mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font px-4 aos-init aos-animate mb-2">
            Bestselling Products
          </h1>
          <div className="absolute bottom-0 left-0 w-32 h-1 bg-primary"></div>
        </div>

      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-12 xl:mx-10">
          {products.map(product => (
            <a
              key={product.id}
              href={product.link}// Replace with the appropriate link
              className="card bg-base-100 shadow-xl relative hover:shadow-lg cursor-pointer transition duration-300"
            >
              <figure className="relative overflow-hidden">
                <img
                  src={product.imageSrc}
                  alt={product.title}
                  className="max-w-full h-auto transition duration-300 transform hover:scale-110"
                />
                <img
                  src={product.hoverImageSrc}
                  alt={product.title}
                  className="max-w-full transition duration-300 transform hover:-translate-y-1 hover:scale-105 h-auto opacity-0 absolute top-0 left-0 hover:opacity-100 scale-125"
                />
              </figure>
              <div className="card-body p-2">
                <h2 className="card-title text-sm font-semibold">{product.title}</h2>
                <p className="text-lg font-semibold mt-2">{product.price}</p> {/* Add price */}
                <p className="text-gray-600 text-xs mt-1">{product.category}</p> {/* Show category */}
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
};

export default BestSellingProductCard;
