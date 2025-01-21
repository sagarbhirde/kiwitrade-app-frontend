// import React from "react";

const categories = [
  {
    title: "Real Estate",
    imageUrl:
      "https://www.vz.ae/wp-content/uploads/2022/11/real-estate-licence-in-Dubai.jpg",
    adsCount: "1,968",
  },
  {
    title: "Cars & Boats",
    imageUrl:
      "https://blog.ipleaders.in/wp-content/uploads/2020/09/house-and-key-on-wooden-table-on-sunlight-background-building-concept-concept-of-selling-real-estate-1138190269-563869f4765c46a3a194e83d80ca61eb.jpg",
    adsCount: "2,568",
  },
  {
    title: "Industrial Jobs",
    imageUrl:
      "https://wallpapers.com/images/hd/real-estate-background-vyigs4zta02jftx6.jpg",
    adsCount: "1,569",
  },
  {
    title: "Restaurants & Events",
    imageUrl:
      "https://th.bing.com/th/id/OIP.OH7KbfjqrFLWJsSNRRudxAHaHa?w=626&h=626&rs=1&pid=ImgDetMain",
    adsCount: "1,968",
  },
  {
    title: "Buy & Sell",
    imageUrl:
      "https://conteudos.quintoandar.com.br/wp-content/uploads/2023/03/GettyImages-1409298953.jpg",
    adsCount: "2,568",
  },
  {
    title: "Community & Events",
    imageUrl:
      "https://www.financialexpress.com/wp-content/uploads/2023/02/real-estate-Mumbai-2.jpg",
    adsCount: "1,569",
  },
];

const BrowseByCategory: React.FC = () => {
  return (
    <div className="px-4 py-8 text-left ">
      <h2 className="text-4xl font-bold mb-4">
        Browse By <span className="italic text-gray-600 font-playfair font-normal">Category</span>
      </h2>
      <p className="text-gray-500 mb-8 ">
        Feel free to adapt this based on the specific managed services,
        features
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div
            key={category.title}
            className="relative h-96 w-94	 rounded-lg overflow-hidden shadow-lg"
          >
            <img
              src={category.imageUrl}
              alt={category.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end pb-7 justify-center">
              <div className="bg-white w-80  rounded-md p-2 flex flex-col items-center justify-center">
                <h3 className="text-black text-lg font-bold">{category.title}</h3>
                <p className="text-gray-600 text-sm font-semibold">{category.adsCount} ads</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseByCategory;
