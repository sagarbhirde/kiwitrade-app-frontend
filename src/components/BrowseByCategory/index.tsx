// import React from "react";
// import { categories } from "../Constants"; // Import the categories array

// const BrowseByCategory: React.FC = () => {
//   return (
//     <div className="px-4 py-8 text-left">
      
//       <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
//         Browse By <span className="italic text-gray-600 font-playfair font-normal">Category</span>
//       </h2>
//       <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-8">
//         Feel free to adapt this based on the specific managed services, features
//       </p>
//       <div className="grid grid-cols-3 gap-6">
//         {categories.map((category) => (
//           <div
//             key={category.title}
//             className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg"
//           >
//             <img
//               src={category.imageUrl}
//               alt={category.title}
//               className="hidden lg:block absolute inset-0 w-full h-full object-cover"
//             />
//             <div className="flex items-center justify-center h-full text-teal-500 text-5xl lg:hidden">
//               {category.icon} 
//             </div>
//             <div className="absolute inset-0 flex items-end pb-7 justify-center block">
//               <div className="bg-white w-80 rounded-md p-2 flex flex-col items-center text-center justify-center hidden lg:block">
//                 <h3 className="text-black text-lg font-bold block">{category.title}</h3>
//                 <p className="text-gray-600 text-sm font-semibold block">
//                   {category.adsCount} ads
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default BrowseByCategory;
import React from "react";
import { categories } from "../Constants"; // Import the categories array

const BrowseByCategory: React.FC = () => {
  return (
    <div className="px-4 py-8 text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
        Browse By <span className="italic text-gray-600 font-playfair font-normal">Category</span>
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-500 mb-8">
        Feel free to adapt this based on the specific managed services, features
      </p>
      <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="relative h-60 sm:h-80 sm:aspect-square md:h-96 w-full rounded-lg overflow-hidden shadow-lg"
          >
            {/* Desktop Image */}
            <img
              src={category.imageUrl}
              alt={category.title}
              className="hidden lg:block absolute inset-0 w-full h-full object-cover"
            />
            {/* Icon for smaller screens */}
            <div className="flex items-center justify-center h-full text-teal-500 text-4xl sm:text-5xl lg:hidden">
              {category.icon}
            </div>
            {/* Overlay content */}
            <div className="absolute inset-0 flex items-end pb-4 sm:pb-6 lg:pb-7 justify-center">
              <div className="bg-white w-10/12 sm:w-3/4 sm:h-9/10 lg:w-80 rounded-md p-2 flex flex-col items-center text-center">
                <h3 className="text-black text-base sm:text-lg font-bold">{category.title}</h3>
                <p className="text-gray-600 text-xs sm:text-sm font-semibold">
                  {category.adsCount} ads
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
