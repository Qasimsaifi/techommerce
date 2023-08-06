// CollectionComponent.js
import React from 'react';

const CollectionComponent = ({ collections }) => {
  return (
    <div className="m-5">
    <h2 className="text-2xl font-semibold text-center mt-7 mb-7">COLLECTIONS</h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
      {collections.map((collection, index) => (
        <div
          className={`card cursor-pointer  relative overflow-hidden ${
            index === 1 ? 'md:col-span-2 md:row-span-2' : ''
          } transition-transform duration-300 hover:scale-105`}
          key={collection.id}
        >
          <figure className="relative">
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 ">
              <h2 className="text-lg font-semibold text-center">{collection.name}</h2>
            </div>
          </figure>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default CollectionComponent;
