import React from "react";
import { categories } from "../Constants"; // Import the categories array

const BrowseByCategory: React.FC = () => {
  return (
    <div className="pr-14 py-8 text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Browse By <span className="italic text-gray-600 font-playfair font-normal">Category</span>
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-16">
        Feel free to adapt this based on the specific managed services, features
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-16 lg:gap-6 gap-y-14  ">
        {categories.map((category) => (
          <div
            key={category.title}
            className=" bg-[#F3FBFA] relative w-[110px] h-[100px]  rounded-none sm:rounded-lg sm:w-full sm:h-80 sm:aspect-square md:h-96"
          > 
            {/* Desktop Image */}
            <img
              src={category.imageUrl}
              alt={category.title}
              className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            />
            {/* Icon for smaller screens */}
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 sm:hidden bg-white p-3 rounded-full shadow-md">
              {category.icon}
            </div>
            {/* Overlay content */}
            <div className="absolute inset-0 flex items-end pb-4 sm:pb-6 lg:pb-7 justify-center">
              <div className="w-10/12 sm:w-3/4 sm:h-9/10 lg:w-80 rounded-md p-2 flex flex-col items-center text-center sm:bg-white sm:shadow-md">
                <h3 className="text-black text-base text-sm sm:text-lg font-medium  sm:font-bold whitespace-nowrap">{category.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                  {category.adsCount} Ads
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
